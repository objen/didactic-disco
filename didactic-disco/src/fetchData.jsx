import { createContext, useEffect, useState } from "react";

const JobData = createContext()
const JobDataProvider = ({children}) => {
//  functions and constants here
const [recentJobs, setRecentJobs] = useState([])

useEffect(getRecentJobs, [])

function getRecentJobs () {
    fetch('https://job-search-api.dev.io-academy.uk/jobs/recent')
        .then(res => res.json())
        .then(data => setRecentJobs(data))
    }

//  export all the variables
const jobObject = {
    recentJobs,
    setRecentJobs,
}

return <JobData.Provider value={jobObject}>{children}  </JobData.Provider>
}
export { JobData, JobDataProvider }
