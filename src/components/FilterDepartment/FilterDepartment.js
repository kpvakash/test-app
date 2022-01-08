import './FilterDepartment.css'

function FilterDepartment(props){
    
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    
    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by Department</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
              <option value='Java'>Java</option>
              <option value='Spring'>Spring</option>
              <option value='NodeJS'>NodeJS</option>
              <option value='ReactJS'>ReactJS</option>
              <option value='DotNet'>DotNet</option>
            </select>
          </div>
        </div>
      );
}
export default FilterDepartment;