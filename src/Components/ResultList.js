import React from 'react';
import './ResultList.css';
import ResultListItem from './ResultListItem';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

function ResultList(props) {
    console.log(props.response.photos.photosData.total_pages);

    function displayList() {
        return props.response.photos.photosData.results.map(el => {
            return <ResultListItem className="list-items" imageURL={el.urls.small} key={el.id} desc={el.description}/>
         });
    }

    function renderFunction() {
        if(props.response.isLoading) {
            return (<div></div>);
        } else {
            return (<div>
                <div className="container">
                    {displayList()}
                </div>
                <Button variant="dark" className="next-button" onClick={handleClick}>Load More</Button>
            </div>);
        }
    }

    function handleClick(evt) {
        if(props.response.photos.photosData.total_pages)

        console.log('Clicked');
    }

    return (<div>
        {renderFunction()}
    </div>);
}

const mapStateToProps = state => {
    return {
        response: state.APICallReducer
    };
}

export default connect(mapStateToProps)(ResultList);