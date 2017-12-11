export const TabNav = ({ children, select, activeIndex }) =>
  (
    <nav className="nav-tab">
      <ul>
        {children.map((el, index) => {
          const Link = el.type;
          return (
            <li
              className={activeIndex === index ? 'active' : ''}
              key={index}
            >
              {
                <Link
                  {...el.props}
                  select={select}
                  index={index}
                />
              }
            </li>
         );
        })}
      </ul>
    </nav>
  );

TabNav.propTypes = {
  select: PropTypes.func.isRequired,
  // list: PropTypes.array.isRequired
};
