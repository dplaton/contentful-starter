import React from "react";
import get from "lodash/get";
import styles from "./blog.module.css";

class NoteIndex extends React.Component {
    
    render() {
        const notes = get(this, "props.data.allContentfulSimpleNote.edges");
        console.log(`Got ${notes.length} notes`);

        const generateNotes = notes.map(({node}) => {
            return (<li key={node.title}>
                <div>{node.title}</div>
                <div>{node.description}</div>
            </li>)
        });
        console.log(generateNotes);
        const toReturn =  (
            <div style={{ background: "#fff" }}>
                <div className={styles.hero}>Notes</div>
                <div className="wrapper">
                <h2 className="section-headline">Recent notes</h2>
                    <ul className="article-list">
                        {generateNotes}
                    </ul>
                </div>
            </div>
        )

        return toReturn;
    }
}
export default NoteIndex;

export const ALL_NOTES_QUERY = graphql`
    query ALL_NOTES_QUERY {
        allContentfulSimpleNote {
            edges {
                node {
                    title
                    description {
                        content {
                            content {
                                value
                            }
                        }
                    }
                }
            }
        }
    }
`;
