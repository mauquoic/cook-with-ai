import React from "react";

import { Link } from "gatsby";

import { Edge } from "@/types";

import * as styles from "./Feed.module.scss";

type Props = {
  edges: Array<Edge>;
};

const Feed: React.FC<Props> = ({ edges }: Props) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <div style={{ "display": "inline-flex" }}>
        <div className={styles.item} key={edge.node.fields.slug} style={{ "width": "80%" }}>
          <div className={styles.meta}>
            <time
              className={styles.time}
              dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            >
              {new Date(edge.node.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </time>
            <span className={styles.divider} />
            <span className={styles.category}>
            <Link to={edge.node.fields.categorySlug} className={styles.link}>
              {edge.node.frontmatter.category}
            </Link>
          </span>
          </div>
          <h2 className={styles.title}>
            <Link
              className={styles.link}
              to={edge.node.frontmatter?.slug || edge.node.fields.slug}
            >
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className={styles.description}>
            {edge.node.frontmatter.description}
          </p>
          <p className={styles.times}>
            Preparation: {edge.node.frontmatter.prepTime} | Cooking: {edge.node.frontmatter.cookTime} | Serves: {edge.node.frontmatter.serves}
          </p>
          <Link
            className={styles.more}
            to={edge.node.frontmatter?.slug || edge.node.fields.slug}
          >
            Read
          </Link>

        </div>
        {edge.node.frontmatter.socialImage ?
          <div className={styles.container} style={{ "width": "25%"}}>
            <div className={styles.verticalCenter}>
              <figure>
                <img className={styles.picture} src={edge.node.frontmatter.socialImage.publicURL}
                     alt={edge.node.frontmatter.socialImage.publicURL} />
              </figure>
            </div>
          </div> :
          null
        }
      </div>
    ))}
  </div>
);

export default Feed;
