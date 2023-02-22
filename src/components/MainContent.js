import './style.css'

function MainContent() {
    return ( 
        <div className="MainContent">
        <ol>
            <li>React is declarative
            <ul>
                <li>React uses declarative instead of imperative syntax. It’s a simpler way of developing apps, and you can learn why here.</li>
            </ul>
            </li>
            <li>React Native makes app development easier
            <ul>
                <li>You may have heard of the phrase “Write once, run anywhere” before. React Native brings that kind of philosophy to React with “Learn once, write anywhere”.</li>
            </ul>
            </li>
            <li>
            The React community is amazing
            <ul>
                <li>React has a massive community of dedicated developers. The community helps to maintain and grow the open-source library, with everyone able to contribute their own components to the library.</li>
            </ul>
            </li>
            <li>
            React is all about Reusable Components
            <ul>
                <li>React saves you time and money on development because it’s component-based. You can break down an interface into reusable components that allow you to build dynamic user interfaces.</li>
            </ul>
            </li>
        </ol>
        </div>
     );
}

export default MainContent;