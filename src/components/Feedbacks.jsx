import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//   >
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         />
//       </div>
//     </div>
//   </motion.div>
// );

const SkillCard = ({
  index,
  skillName,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.1, 0.75)}
    className='bg-black-200 p-4 rounded-3xl xs:w-[120px] sm:w-[150px] w-full flex items-center justify-center h-[80px]'>
    <p className='text-white font-bold text-[16px] text-center'>{skillName}</p>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I can do</p>
          <h2 className={styles.sectionHeadText}>Skills</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <SkillCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "skills");
