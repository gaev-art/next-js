import Link from "next/link";
import styles from '/styles/A.module.css'

const A = ({href, title}) => {
  return (
      <Link href={href}>
        <a className={styles.link}>{title}</a>
      </Link>
  );
};

export default A;