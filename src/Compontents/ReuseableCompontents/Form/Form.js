import { useState } from "react";
import "./Form.css";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Form() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.1213070634": "",
    "entry.556407093": "",
    "entry.1372544995": "",
    "entry.1330038153": "",
    "entry.241667131": "",
  });


  //handel input
  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    if (!formData["entry.1213070634"] || !formData["entry.556407093"] || !formData["entry.1372544995"] || !formData["entry.1330038153"] || !formData["entry.241667131"]) {
      alert("Please filled the all input fill!");
      return;
    }
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(formData["entry.556407093"])) {
      alert("Enter a valid email Id!");
      return;
    }
    var mobRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!mobRegex.test(formData["entry.1372544995"])) {
      alert("Enter a valid phone Number Id!");
      return;
    }

    // setSubmit(true);

    const formDataStr = new URLSearchParams(formData).toString();
    let url = `https://docs.google.com/forms/d/e/1FAIpQLScO6AgxA9osPewSjz6gHxTtIi5VwmGDNXbhuNb1UTFDYa4IEA/formResponse`;
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataStr,
      });

    } catch (error) {
      console.log(error)
      alert("Form submitted successfully. Thanks!");
      setFormData({
        "entry.1213070634": "",
        "entry.556407093": "",
        "entry.1372544995": "",
        "entry.1330038153": "",
        "entry.241667131": "",
      })
    }
  };


  /*
  ID for Input fields - 
  Name - entry.1213070634
  Phone Number - entry.1372544995
  Email Address - entry.556407093
  Drop-down - entry.231518533
  Description - entry.241667131
  
  entry.1213070634: tushar
  entry.1372544995: 967
  entry.556407093: tu@mai.com
  entry.241667131: tttt
  entry.1330038153: CAD Design
  
  entry.231518533
  : 
  ""
  entry.241667131
  : 
  "ku"
  entry.556407093
  : 
  "roman123@gg.com"
  entry.1213070634
  : 
  "roman"
  entry.1330038153
  : 
  "Partner"
  entry.1372544995
  : 
  "7626895622"
  */

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="homP-from">
        <input
          onChange={handleInputData("entry.1213070634")}
          value={formData["entry.1213070634"]}
          id="entry.1213070634"
          type="text"
          name="entry.1213070634"
          placeholder="Enter Name"
          required
        />
        <input
          onChange={handleInputData("entry.556407093")}
          value={formData["entry.556407093"]}
          id="entry.556407093"
          type="email"
          name="entry.556407093"
          placeholder="Enter Email"
          required
        />

        <input
          onChange={handleInputData("entry.1372544995")}
          value={formData["entry.1372544995"]}
          id="entry.1372544995"
          name="entry.1372544995"
          placeholder="Enter Phone No"
          required
        />
        <select
          onChange={handleInputData("entry.1330038153")}
          value={formData["entry.1330038153"]}
          id="entry.231518533"
          name="entry.1330038153"
        >
          <option value="" disabled selected hidden>
            WHAT ARE YOU LOOKING FOR
          </option>
          <option value="CAD-Design">CAD-Design</option>
          <option value="Laser CNC">Laser CNC</option>
          <option value="ESDM / PCBA">ESDM / PCBA</option>
          <option value="Rapid Prototyping">Rapid Prototyping</option>
          <option value="Others">Others</option>
        </select>
        <textarea
          onChange={handleInputData("entry.241667131")}
          value={formData["entry.241667131"]}
          id="entry.241667131"
          name="entry.241667131"
          placeholder="Description"
          required
        />

        <div onClick={(e) => handleSubmit(e)} className="homP-sub-button">
          <p>SUBMIT</p>
          {/* <ArrowForwardIcon /> */}
        </div>
      </form>
    </div>
  );
}

export default Form;
