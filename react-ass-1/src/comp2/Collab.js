import React, { useState } from 'react';
import "./Collab.css"
const Collab = () => {
  // State variables
  const [projectName, setProjectName] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [teamProjects, setTeamProjects] = useState([]);

  // Function to handle project creation
  const createProject = () => {
    if (projectName && teamMembers.length > 0) {
      const newProject = {
        name: projectName,
        team: teamMembers,
        // Additional project details can be added here
      };
      setTeamProjects([...teamProjects, newProject]);
      // Reset form fields
      setProjectName('');
      setTeamMembers([]);
    } else {
      alert('Please enter project name and add team members.');
    }
  };

  // Function to handle adding a new team member
  const addTeamMember = () => {
    if (newMemberEmail) {
      setTeamMembers([...teamMembers, newMemberEmail]);
      setNewMemberEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className='text-center Y'>
      <h2 className='head-1'>Project Collaboration</h2>
      <div className='card mx-auto d-flex justify-content-center align-items-center w-50'>
        <h3 className='h-2'>Create New Project</h3>
        <input
          type="text"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <br/>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
        <input
          type="email"
          placeholder="Enter team member email"
          value={newMemberEmail}
          onChange={(e) => setNewMemberEmail(e.target.value)}
        />
        <br/>
        <button className="m-2" onClick={addTeamMember}>Add Team Member</button>
        <button className="m-2" onClick={createProject}>Create Project</button>
      </div>
      <div >
        <h3>Team Projects</h3>
        
        <div className='d-flex justify-content-center align-items-center flex-wrap w-75 mx-auto'>
          {teamProjects.map((project, index) => (
            <div className='team card w-25 m-1' key={index}>
              <strong>{project.name}</strong> - Team: {project.team.join(', ')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collab;
