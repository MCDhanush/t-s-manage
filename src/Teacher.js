import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Teachlist } from './Teachlist';

export function Teacher() {
  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);
  const aboutTea = (() => {
    fetch(`https://64a1011e0079ce56e2dabc8a.mockapi.io/teachers`)
      .then((e) => e.json())
      .then((e) => setTeachers(e));
  });
  useEffect(() => aboutTea(), []);

  const deletTeach = (id) => {
    fetch(`https://64a1011e0079ce56e2dabc8a.mockapi.io/teachers/${id}`, {
      method: "Delete"
    })
      .then((e) => aboutTea());

  };


  return (
    <>
      <div className='teacher-cont'>
        {teachers.map((e) => (
          <Teachlist id={e.id} key={e.id} teach={e}
            deletButton={<IconButton onClick={() => deletTeach(e.id)} aria-label="delete">
              <DeleteIcon color='error' />
            </IconButton>}
            editButton={<IconButton onClick={() => navigate(`/editteacher/${e.id}`)} aria-label="delete">
              <EditNoteIcon color='secondary' />
            </IconButton>} />
            
        ))}

      </div>
    </>
  );
}
