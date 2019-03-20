import React from "react";
import get from "lodash/get";
import styles from "./blog.module.css";

import Note from "../components/note";

class NoteIndex extends React.Component {
    render() {
        const notes = get(this, "props.data.allContentfulSimpleNote.edges");

        const toReturn = (
            <div style={{ background: "#fff" }}>
                <div className={styles.hero}>Notes</div>
                <div className="wrapper">
                    <h2 className="section-headline">Recent notes</h2>
                    <ul className="article-list">
                        {notes.map(({ node }) => (
                            <Note
                                key={node.title}
                                title={node.title}
                                description={node.description}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );

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
