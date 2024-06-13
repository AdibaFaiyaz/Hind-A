import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const about = () => {
  return (
    <>
      <div className="relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center">
        <div className="absolute w-screen h-full">
          <Image className="w-screen h-full object-cover object-center" width={1200} height={1200} src={`/ground.JPG`} alt="" />
        </div>
      </div>

      <div className="bg-gray-100 text-gray-900">
        <section className="container mx-auto p-12 bg-stone-300">
          <h2 className="text-3xl font-semibold mb-4 text-center">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            <strong>HIND-A</strong> is a dedicated non-governmental organization committed to transforming the lives of underprivileged children through the power of education. Founded on the principles of equality, compassion, and empowerment, our organization strives to ensure that every child has the opportunity to learn, grow, and realize their full potential.
          </p>
        </section>


        

          
        <section className="container mx-auto p-12 bg-white flex justify-around">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-6 max-w-prose mx-auto">
            <li><strong>Bridge Educational Gaps:</strong> We aim to provide access to quality education for underprivileged children, ensuring that they have the tools and opportunities to succeed academically.</li>
            <li><strong>Promote Holistic Development:</strong> We are dedicated to fostering the overall growth of children through programs in academics, arts, sports, and life skills, helping them develop into well-rounded individuals.</li>
            <li><strong>Empower Communities:</strong> We believe in the power of community and work closely with local partners, schools, and families to create a supportive educational environment.</li>
            <li><strong>Advocate for Equity:</strong> We advocate for policies and practices that promote educational equity and inclusivity, striving to eliminate barriers and disparities in education.</li>
          </ul>
          </div>
          <div>
          <Image src="/study.JPG" width={270} height={300} alt='duo'/>
        </div>
        </section>


        <section className="container mx-auto p-12 bg-stone-300">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Story</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            <strong>HIND-A</strong> was established by a group of passionate individuals who recognized the profound impact education has on breaking the cycle of poverty. Driven by a shared vision, we came together to address the educational challenges faced by children from disadvantaged backgrounds. Our journey began with a simple mission: to bridge the educational gap and provide the necessary resources and support to those who need it the most.
          </p>
        </section>

        
      


        <section className="container mx-auto p-12 bg-white flex justify-around">
          <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Vision</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-6 max-w-prose mx-auto">
            <li><strong>Ensure Universal Access to Education:</strong> Create a world where every child has access to free and quality education, regardless of their socio-economic background.</li>
            <li><strong>Foster Holistic Child Development:</strong> Provide environments that nurture not only academic success but also the overall development of children through various extracurricular activities.</li>
            <li><strong>Empower and Engage Communities:</strong> Build empowered communities that actively participate in the education and development of their children, ensuring sustainable educational ecosystems.</li>
            <li><strong>Achieve Educational Equity and Inclusion:</strong> Promote policies and practices that support equal educational opportunities for all children, with a focus on eliminating disparities and fostering inclusivity.</li>
          </ul>
          </div>
          <div>
          <Image src="/duo.JPG" width={270} height={300} alt='duo'/>
        </div>
        </section>


        <section className="container mx-auto p-12 bg-stone-300">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img src="team-member1.jpg" alt="Team Member 1" className="rounded-full w-32 h-32 mx-auto mb-4"/>
                <h3 className
                ="text-xl font-semibold">Dr.Mohsena Khalil</h3>
                <p className="text-sm">Founder</p>
            </div>
            <div className="text-center">
              <img src="team-member2.jpg" alt="Team Member 2" className="rounded-full w-32 h-32 mx-auto mb-4"/>
                <h3 className="text-xl font-semibold">Adeeb Faiyaz</h3>
                <p className="text-sm">Program Director</p>
            </div>
            <div className="text-center">
              <img src="team-member3.jpg" alt="Team Member 3" className="rounded-full w-32 h-32 mx-auto mb-4"/>
                <h3 className="text-xl font-semibold">Adeeb Faiyaz</h3>
                <p className="text-sm">Community Outreach Coordinator</p>
            </div>
            <div className="text-center">
              <img src="team-member4.jpg" alt="Team Member 4" className="rounded-full w-32 h-32 mx-auto mb-4"/>
                <h3 className="text-xl font-semibold">Adeeb Faiyaz</h3>
                <p className="text-sm">Volunteer Manager</p>
            </div>
          </div>
        </section>


        <section className="container mx-auto p-12 bg-white ">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Aim</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
            <p className="text-lg">Educate</p>
              <h3 className="text-2xl font-bold text-blue-600">5,000+</h3>
              <p className="text-lg">Children</p>
            </div>
            <div>
            <p className="text-lg">Train</p>
              <h3 className="text-2xl font-bold text-blue-500">200+</h3>
              <p className="text-lg">Teachers</p>
            </div>
            <div>
            <p className="text-lg">Impact</p>
              <h3 className="text-2xl font-bold text-blue-500">10,000+</h3>
              <p className="text-lg">Lives</p>
            </div>
          </div>
        </section>

        <section className="container bg-gradient-to-r from-rose-400 to-red-500 mx-auto p-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">Join Us in Making a Difference</h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            At <strong>HIND-A</strong>, we believe in the power of collective effort. Whether you want to volunteer, donate, or partner with us, your support helps us provide quality education to underprivileged children and create a brighter future for them.
          </p>
          <div className="text-center">
          <Link href='/donate'>
            <button className="bg-white font-semibold py-5 px-10 rounded-full hover:bg-gray-400">DONATE</button></Link>
          </div>
        </section>
      </div>



    </>
  )
}

export default about
