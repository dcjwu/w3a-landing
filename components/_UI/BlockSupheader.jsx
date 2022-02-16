const BlockSupheader = ({ children, left }) => {
   return (
      <p className={`custom__supheader${left ? " left" : ""}`}>{`/** ${children} /*`}</p>
   )
}

export default BlockSupheader