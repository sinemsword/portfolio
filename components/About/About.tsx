'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills" as const,
      content: (
        <ul className="list-disc pl-2">
          <li>C++</li>
          <li>C#</li>
          <li>Matlab</li>
          <li>Java</li>
          <li>Python</li>
          <li>Proteus 8</li>
          <li>Microsoft Word</li>
          <li>Microsoft Excel</li>
          <li>Microsoft PowerPoint</li>
          
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education" as const,
      content: (
        <ul className="list-disc pl-2">
          <li>Namık Kemal University</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications" as const,
      content: (
        <ul className="list-disc pl-2">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
          <li>Cisco</li>
        </ul>
      ),
    },
];

type TabId = "skills" | "education" | "certifications";

const About: React.FC = () => {
    const [tab, setTab] = useState<TabId>("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: TabId) => {
      startTransition(() => {
        setTab(id);
      });
    };

  return (
    <div className='text-white' id='about'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4'>
            <Image alt='' src="/1.png" width={500} height={500} />

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <p className='text-base lg:text-lg'>
                    I am a full-stack developer with a passion for technology. I have worked on various projects,
                    from small startups to large corporations. My goal is to help clients build their digital products.
                </p>

                <div className='flex flex-row justify-start mt-8'>
                    <TabButton
                        selecTab={() => handleTabChange("skills")}
                        active={tab === "skills"}  
                    >
                        Skills
                    </TabButton>
                    <TabButton
                        selecTab={() => handleTabChange("education")}
                        active={tab === "education"}  
                    >
                        Education
                    </TabButton>
                    <TabButton
                        selecTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}  
                    >
                        Certifications
                    </TabButton>
                </div>

                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
