import React from "react";
import axios from "axios";
import trashIcon from "./../../assets/icons/trash.svg";

async function getAllEmployees() {
  try {
    const response = await axios.get(
      "https://crudcrud.com/api/01ee6cc8deb14c6c9795288854189484"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

console.log(getAllEmployees);

const EmployeeTable = () => {
  return (
    <table className="w-full">
      <thead className="text-blue-900 uppercase text-sm mb-4">
        <tr>
          <td>
            <input
              type="checkbox"
              className="rounded-none checked:bg-green-500"
            />
          </td>
          <td>first name</td>
          <td>last name</td>
          <td>email</td>
          <td>phone</td>
          <td>role</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr className="text-gray-400 rounded-2xl">
          <td>
            <input type="checkbox" className="rounded-none" />
          </td>
          <td>Joshua</td>
          <td>Bakare</td>
          <td>josh.bakare@gmail.com</td>
          <td>+2348012345678</td>
          <td>Admin</td>
          <td>
            <img src={trashIcon} alt="Trash Icon" />
          </td>
        </tr>
        <tr className="text-gray-400 rounded-2xl">
          <td>
            <input type="checkbox" className="rounded-none" />
          </td>
          <td>Jane</td>
          <td>Clement</td>
          <td>jane.clement@gmail.com</td>
          <td>+2348012345678</td>
          <td>Staff</td>
          <td>
            <img src={trashIcon} alt="Trash Icon" />
          </td>
        </tr>
        <tr className="text-gray-400 rounded-2xl">
          <td>
            <input type="checkbox" className="rounded-none" />
          </td>
          <td>Hannah</td>
          <td>Johnson</td>
          <td>hannah.j@gmail.com</td>
          <td>+2348012345678</td>
          <td>Staff</td>
          <td>
            <img src={trashIcon} alt="Trash Icon" />
          </td>
        </tr>
        <tr className="text-gray-400 rounded-2xl">
          <td>
            <input type="checkbox" className="rounded-none" />
          </td>
          <td>Omotola</td>
          <td>Adeleke</td>
          <td>tola.leke@gmail.com</td>
          <td>+2348012345678</td>
          <td>Staff</td>
          <td>
            <img src={trashIcon} alt="Trash Icon" />
          </td>
        </tr>
        <tr className="text-gray-400 rounded-2xl">
          <td>
            <input type="checkbox" className="rounded-none" />
          </td>
          <td>John</td>
          <td>Ngoka</td>
          <td>john.ngoka@gmail.com</td>
          <td>+2348012345678</td>
          <td>Staff</td>
          <td>
            <img src={trashIcon} alt="Trash Icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EmployeeTable;
