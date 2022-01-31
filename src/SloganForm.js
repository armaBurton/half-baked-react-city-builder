import { useState } from 'react';

export default function SloganForm(slogan, setSlogan) {
  // React forms are a pain! 
  // Track the sloganInput form state with a useState hook
  const [sloganInForm, setSloganInForm] = useState(``);
    
  function handleSubmit(e) {
    e.preventDefault();

    console.log(sloganInForm);
    
    // This component takes in a prop called setSlogans, which is a function that takes in an array of slogans. 
    // setSlogan([...slogan, sloganInForm]);
    // Also, this component also takes in a prop called slogans, which is an arry of strings. //// On submit call the setSlogans state with a new array that is a copy of the old array with the new slogan immutably added to the end 
    
    // set the sloganInput form state to an empty string to reset the form
  }
  
  function handleSloganChange(e){
    setSloganInForm(e.target.value);
  }

  return (
    <section>
      {/* on submit, call the handleSubmit function, defined above */}
      <form>
        Add a slogan to the list!
        {/* on change, set the sloganInput in state to be the input value */}
        {/* also, weirdly, set the value of this input to the sloganInput tracked in state to make this a 'controlled' form input */}
        <input required value={sloganInForm} onChange={handleSloganChange} />
        <button>Submit</button>
      </form>
    </section>
  );
}
