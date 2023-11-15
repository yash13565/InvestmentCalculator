import React, { useState } from 'react'

function FormComponent() {
    const intialInput = {
        "current-savings":1000,
        "yearly-contribution":2000,
        "expected-return":50,
        duration:10,
     }
    const [input,setInput] = useState(intialInput)
    const handleChange = (identifier,value) => {
      setInput((prev)=>{
        return {
            ...prev,
            [identifier]:value
        }
      })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleReset = () => {
        setInput(intialInput)
    }
  return (
    <>
 <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={input['current-savings']} onChange={(e)=>handleChange('current-savings',e.target.value)}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={input['yearly-contribution']} onChange={(e)=>handleChange('yearly-contribution',e.target.value)}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={input['expected-return']} onChange={(e)=>handleChange('expected-return',e.target.value)}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={input['duration' ]} onChange={(e)=>handleChange('duration',e.target.value)}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  )
}

export default FormComponent