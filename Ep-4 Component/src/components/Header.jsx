// functional component

// props stands for "properties".
// They are like arguments passed to a function, but for React components.

// Think of props as a way to send data from a parent component to a child component.

// 🧠 Why do we use props?
// To make components dynamic and reusable

// To pass data (like text, numbers, functions) to child components

function Header(props) {
    console.log(props)
    return (
        <>
        <header>
            <h1>Todo List</h1>
        </header>
        </>
    )
}

export default Header;