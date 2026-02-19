import "./App.css";



export default function App() {
  return (

    <div className="container">
      <table border="1" cellpadding="10" cellspacing="0">
        <thead>
          <tr>
            <th>S/NO.</th>
            <th >Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="email-header">rahul.sharma@gmail.com</td>
            <td>9812345670</td>
            <td>Mumbai</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="email-header">neha.verma@yahoo.com</td>
            <td>9123456781</td>
            <td>Pune</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="email-header">amit.kumar@outlook.com</td>
            <td>9988776655</td>
            <td>Lucknow</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="email-header">priya.singh@gmail.com</td>
            <td>9876501234</td>
            <td>Chandigarh</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="email-header">rohit.jain@mail.com</td>
            <td>9090909090</td>
            <td>Indore</td>
          </tr>
          <tr>
            <td>6</td>
            <td className="email-header">kiran.patel@gmail.com</td>
            <td>9345612789</td>
            <td>Ahmedabad</td>
          </tr>
          <tr>
            <td>7</td>
            <td className="email-header">sunita.reddy@yahoo.com</td>
            <td>8765432109</td>
            <td>Hyderabad</td>
          </tr>
          <tr>
            <td>8</td>
            <td className="email-header">vikas.mehra@live.com</td>
            <td>9011223344</td>
            <td>Bangalore</td>
          </tr>
          <tr>
            <td>9</td>
            <td className="email-header">anita.das@gmail.com</td>
            <td>8899776655</td>
            <td>Kolkata</td>
          </tr>
          <tr>
            <td>10</td>
            <td className="email-header">deepak.malhotra@protonmail.com</td>
            <td>9765432180</td>
            <td>Jaipur</td>
          </tr>

        </tbody>
      </table>
      <div class="pagination">
        <a href="#">«</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">»</a>
      </div>
    </div >



  );
}


