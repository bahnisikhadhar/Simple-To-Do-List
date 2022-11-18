

const userForm=document.querySelector("#user_form");
const inputSubmit=document.querySelector("#input_submit");

//--------------------------- SUBMIT Button's default behaviour change-------------------------------------

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
});

//--------------------------- submit button click event----------------------------------------------------

inputSubmit.addEventListener("click",(event)=>
{

    // console.log(event)
    document.getElementById("error").innerText="";
    const inputText=document.querySelector("#input_text");
    const textArea=document.querySelector("#text_area");

    // ----------------------------------if condition for giving error message--------------------------------
    if(inputText.value=="")
    {
        const error=document.getElementById("error");
        error.innerText=" Please enter Task";
        error.className="errorText";
        inputText.style.border="2px solid red";
    }

// --------------------------------------else condition if submitted succesfully-------------------------------
    else {
        const box=document.getElementById("box");
        inputText.style.border="2px solid black";
//-------------------------------------Adding input and text content---------------------------------
        const text=document.createElement("li");
        text.innerText=inputText.value + "\n" + textArea.value;
        box.appendChild(text);

// ------------------------------------Adding delete button-------------------------------------------
        const button=document.createElement("button");
        button.innerText="delete";
        text.appendChild(button);

// ---------------------------------after submit input and text field must be empty again nd placeholder will be shown

        inputText.value="";
        textArea.value="";

// ---------------------------------for applying css to the output-------------------------------------
        text.className="text_li";
        button.className="button_del"
        
// ---------------------------------after clicking delete button all will be removed--------------------------- 
        button.addEventListener("click",()=>
        {
            button.remove();
            text.remove();
        })
        
        
}
});
   
    
  