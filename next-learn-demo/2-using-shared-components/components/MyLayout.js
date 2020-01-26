import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />

              {/* If you remove {props.children}, the Layout cannot render the content inside the Layout element wrapped in other components. */}
          {/* {props.children} */}
    {props.content}
  </div>
);

export default Layout;