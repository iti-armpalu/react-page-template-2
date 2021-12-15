var App = function App() {
  return React.createElement(
    Template,
    null,
    React.createElement(
      'h1',
      null,
      'Press page'
    ),
    React.createElement(
      'h2',
      null,
      'Press page news'
    )
  );
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));