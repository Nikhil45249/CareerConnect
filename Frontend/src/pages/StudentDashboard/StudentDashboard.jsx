import DashboardNavbar from '../../components/dashboard/DashboardNavbar'
import DashboardOverview from '../../components/dashboard/DashboardOverview'
import RecentApplications from '../../components/dashboard/RecentApplications'
import RecommendedJobs from '../../components/dashboard/RecommendedJobs'
import Sidebar  from '../../components/dashboard/Sidebar'
import React from 'react'

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <DashboardNavbar />

        <main className="p-6 lg:p-8 xl:p-10">
          {/* dashboard content */}
          <DashboardOverview/>
          <RecommendedJobs/>
          <RecentApplications/>
        </main>

      </div>

    </div>
  )
}

export default StudentDashboard