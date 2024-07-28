'use client'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div>
      Hero
      <CustomButton title={"Explore Cars"}
      containerStyles='bg-primary-blue text-white rounded-full mt-10'
      handleClick={handleScroll}
      />
    </div>
  )
}

export default Hero
