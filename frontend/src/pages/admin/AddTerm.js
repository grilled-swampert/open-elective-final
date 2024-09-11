import { useEffect } from "react";
import TermDetails from "../../components/admin/editAdmin/display/termDetails";
import TermForm from "../../components/admin/editAdmin/form/termForm";
import Header from "../../components/header/Header";
import './AddTerm.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTerms } from '../../actions/terms';

export default function AddTerm() {
  const dispatch = useDispatch();
  const terms = useSelector((state) => state.terms);
  console.log(terms);

  useEffect(() => {
    dispatch(getTerms());
  }, [dispatch]);

  console.log(terms);

  return (
    <div>
      <Header />
      <div className="content">
        <div className="left-panel">
          <TermForm />
        </div>
        <div className="right-panel">
          <table id="pls-fucking-work">
            <thead>
              <tr>
                  <th scope="col">ACADEMIC YEAR</th>
                  <th scope="col">SEM</th>
                  <th scope="col">VIEW / EDIT</th>
              </tr>
            </thead>
          
              { terms && terms.map((term) => (
                <TermDetails term={term} key={term._id} />
              ))}
          </table> 
        </div>
      </div>
    </div>
  );
}
