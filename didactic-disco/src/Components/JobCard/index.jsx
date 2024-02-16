import SkillBubbles from "../SkillBubbles";


function JobCard({ salary, type, title, company, logo, skills, url }) {

    console.log(salary)
        // const cash = new Intl.NumberFormat('en-US', {  }).format(salary)

    return (
        <div className='odd:bg-zinc-600 even:bg-zinc-700 px-2 py-3 text-white flex'>
            <div className='font-semibold basis-5/12 flex flex-col justify-between md:flex-row md:justify-start gap-3'>
                <img className='h-20 w-20 hidden md:block' src={logo} />
                <div>
                    <h3 className='text-xl'>{title}</h3>
                    <p className='text-lg'>{company}</p>
                </div>
            </div>
            <div className='basis-2/12'>
                <span className='text-xs font-bold bg-blue-500 px-2.5 py-1.5 rounded-2xl'>{type}</span>
            </div>
            <div className='basis-2/12'>
                <p>£{salary}</p>
            </div>
            <div className='basis-3/12 flex flex-wrap gap-1 content-start'>
                {skills.map((skill) => ( 
                <SkillBubbles 
                key={skill.id}
                skill={skill.skill} />
                ))}
            </div>
        </div>
    )
  }
  
  export default JobCard;