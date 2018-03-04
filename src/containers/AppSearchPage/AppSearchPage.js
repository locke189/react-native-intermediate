import  { requestHeroList } from '../../actions';
import { connect } from 'react-redux';
import { SearchPage } from '../../components';

const mapStateToProps = (state) => {
  return {
    heroList: state.heroList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: dispatch(requestHeroList())
  }
}

export const AppSearchPage = connect(mapStateToProps,mapDispatchToProps)(SearchPage);
