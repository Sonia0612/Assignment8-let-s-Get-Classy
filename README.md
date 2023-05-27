# Assignment8-lets-Get-Classy
## Theory

Qn1. How to create Nested Routes?
- Nested routes can be created by adding further routes in children.
- ### {path:'/about',element:<About/>,children:[{path:'user',element:<User/>}]}  
- This is routed as /about/user

Qn2.WHAt is the order of Lifecycle method calls in Class based Components?
- Firstly, the constructor is called then render is called and then componentdidMount.
- If any child element is there then the parent constructor is called then parent render is called and then child constructor and then child render and then child componentdidMount and finally,parent componentdidMount.
- If there is aync operation in componentdidMount, then after child render , the parent's componentdidMount is called and then child's componentdidMount because it awaits the response which causes delay.
- ComponentdidUpdate is called whenever any update happens in the DOM and after render.here, the constructor is not called.
- ComponentdidMount only calls once in initial render.Both componentdidMount and componentdidUpdate called after the mounting and updation.
- ComponentWillUnmount will get called whenever we are unmounting/removing component from DOM.It gets called when the component is unmounting.

Qn3.Why do we use componentdidMount?
- componentdidMount is used to execute the React code when component is already placed in DOM.
- It is used to fetch data and for async/await operations.
- It executes after the initial render and If there is any API call then it loads the data after render.Thatsy, it is safe place to call any API also.

Qn4.Why do we use componentWillUnmount?
- This is the Unmounting Phase.
- We use this when we are moving to other page/component and we want to remove the current component from DOM.
- Also, used for clearing the interval.

Qn5.Why do we use super(props) in constructor?
- Super() function is used to call the constructor of the parent class. 
- It is used when we need to access a few variables in the parent class. 
- It returns an object which represents the parent class.
- The super keyword in JavaScript is mostly used to access properties on an object literal or class's [[Prototype]] or to invoke a superclass's constructor.

Qn6.Why we can't use async with useEffect in functional component?
- Because React's useEffect hook expects a cleanup function returned from it which is called when the component unmounts. 
- Using an async function here will cause a bug as the cleanup function will never get called.
- The issue here is that the first argument of useEffect is supposed to be a function that returns either nothing (undefined) or a function (to clean up side effects). 
- But an async function returns a Promise, which can't be called as a function! 