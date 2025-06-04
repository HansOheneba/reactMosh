function Message(){
    const name = "Hans";

if (name)
    return (
      <div>
        <h1> Hello {name}</h1>
      </div>
    );
    else
    return (
<div>
    <h1>Hello world</h1>
</div>
)
}

export default Message;