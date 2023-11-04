import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout'

// Commons
import Cards from './common/Cards'
import Table from './common/Table'

// Icons
import Database from '../../assets/database.svg'
import ArrowRight from '../../assets/arrow-right.svg'
import Calendar from '../../assets/calendar-check-1.svg'

const DashboardMain: React.FC = () => {
  return (
    <DashboardLayout>
        <div>
          <span className="font-semibold md:text-2xl text-black">Welcome Back</span>
          <span className="font-semibold md:text-2xl text-onfocus"> Olivia</span>
        </div>
          <span className="text-sm text-grey">Your current account summary and activity.</span>
          <div className="flex flex-col items-center">
    <div className="flex md:w-600px flex-wrap justify-center md:my-4">
      <div className="md:p-4 p-1">
        <Cards Icon={Database} ArrowRight={ArrowRight} Description="Total Earnings" Content="35 $" />
      </div>
      <div className="md:p-4 p-1">
        <Cards Icon={Calendar} ArrowRight={ArrowRight} Description="Appointments" Content="1/4" />
      </div>
    </div>
    <div className="sm:w-550px">
      <Table />
    </div>
    </div>
    </DashboardLayout>
  );
}

export default DashboardMain;