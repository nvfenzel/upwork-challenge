import React from 'react'

enum Gender {
    Male = 'Male',
    Female = 'Female',
  }

enum Status {
    Pending = <span className="inline-flex items-center rounded-xl bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">PENDING</span>,
    Completed = <span className="inline-flex items-center rounded-xl bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">COMPLETED</span>,
    Canceled = <span className="inline-flex items-center rounded-xl bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">CANCELED</span>,
  }
  
const users: {
    name: string;
    gender: Gender;
    time: string;
    status: Status;

  }[] = [
      { name: 'Catalina', gender: Gender.Female, time: '12:00 AM', status: Status.Pending},
      { name: 'John', gender: Gender.Male, time: '12:00 AM', status: Status.Completed},
      { name: 'Martin', gender: Gender.Male, time: '12:00 AM', status: Status.Canceled},
    { name: 'Susan', gender: Gender.Female, time: '12:00 AM', status: Status.Pending},
  ];

const Table: React.FC = () => {
  return (
    <div className="border border-inherit rounded-xl w-full">
        <div className="sm:h-16 flex flex-col md:px-6 px-2 py-1 justify-around">
            <div className="flex w-full justify-between align-bottom">
                <div className="flex sm:flex-row flex-col">
                    <span className="font-semibold text-base text-grey-dark"> Appointments</span>
                    <span className="font-medium text-xs text-grey-700 border-2 rounded-md p-1 sm:ml-4"> 4 appointments</span>
                </div>
                <span className="font-semibold text-xs border-b-2 h-5 border-onfocus text-onfocus cursor-pointer">See all</span>
            </div>
                <span className="text-xs text-grey">Keep track of your appointments  and their dates.</span>
        </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs h-9 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className={'border'}>
                <th className="font-medium md:px-6 px-1 py-1">Name</th>
                <th className="font-medium md:px-6 px-1 py-1">Gender</th>
                <th className="font-medium md:px-6 px-1 py-1">Time</th>
                <th className="font-medium md:px-6 px-1 py-1">Status</th>
            </tr>
        </thead>
        <tbody className="bg-white border-b dark:bg-gray-800">
            {users.map((user, index) => (
            <tr key={index} className={'border-b'}>
            <td className="md:px-6 px-1 py-3 text-xs font-medium text-black text-left">{user.name}</td>
            <td className="md:px-6 px-1 py-3 text-xs font-medium text-black text-left">{user.gender}</td>
            <td className="md:px-6 px-1 py-3 text-xs ">{user.time}</td>
            <td className="md:px-6 px-1 py-3 text-xs  text-right">{user.status}</td>
          </tr>
        ))}
        </tbody>
    </table>
</div>
  )
}

export default Table