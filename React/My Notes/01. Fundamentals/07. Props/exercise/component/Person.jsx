const Person = (props)=>{
    return <section>
        <h2>Name : {props.name}</h2>
        <p>Age : {props.age}</p>
    </section>
}
// const Person = ({name,age})=>{
//     return <section>
//         <h2>Name : {name}</h2>
//         <p>Age : {age}</p>
//     </section>
// }

export default Person;