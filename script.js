// let's use an App component to wrap everything.
// The h1 element is a child element of Template, it will be passed to Template as props.children. The h1 element will be rendered at the location where the code {props.children} is in the Template component. 

var App = function App() {
  return React.createElement(
    Template,
    null,
    React.createElement(
      'h1',
      null,
      'Main content'
    ),
    React.createElement(
      'h2',
      null,
      'Also main content'
    )
  );
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));