import { useContext } from "react";
import { JobData } from "../../fetchData";
import JobCard from "../JobCard";

function RecentListings() {
    const { recentJobs } = useContext(JobData);
  
    return (
      <section className='px-2.5 py-5 mx-auto w-full lg:max-w-screen-lg'>
        <div className='flex flex-row justify-between items-start my-3'>
          <h2 className='text-4xl'>Most Recent Jobs</h2>
          <a className='text-blue-500 hover:text-green-500' href='/search'>View All Jobs  &#8594;</a>
        </div>
        <div className='bg-zinc-700 p-2 text-white font-bold flex'>
          <span className='basis-5/12'>Job Title/Company</span>
          <span className='basis-2/12'>Type</span>
          <span className='basis-2/12'>Salary</span>
          <span className='basis-3/12'>Skills</span>
        </div>
        <div>
          {recentJobs.map((job) => (
             <JobCard 
               key={job.id}
               salary={job.salary != null ? new Intl.NumberFormat('en-US').format(job.salary) : ' -'}
               type={job.type != null ? job.type : 'N/A'}
               title={job.job_title}
               company={job.company}
               logo={job.logo}
               skills={job.skills}
               url={job.id}
             />
           ))}
        </div>
          
      </section>
    )
  }
  
  export default RecentListings;