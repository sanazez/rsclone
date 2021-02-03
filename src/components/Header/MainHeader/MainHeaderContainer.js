import React from 'react';
import { connect } from 'react-redux';
import { updateVolumeActionCreater } from '../../../redux/header-reducer';
import MainHeader from './MainHeader';

class MainHeaderContiner extends React.Component {
    constructor() {
        super();
        this.isMute = false;
    }
    componentDidMount() {
        let isMute = this.getFromStorage();
        if (isMute === null) {
            this.updateStorage(false);
            this.props.changeVolumeMode(this.isMute);
        } else {
            this.isMute = isMute;
            this.props.changeVolumeMode(this.isMute);
        }
    }
    updateStorage(value) {
        window.localStorage.setItem('isMute', JSON.stringify(value));
    }
    getFromStorage(subst = null) {
        return JSON.parse(window.localStorage.getItem('isMute') || subst);
    }
    changeVolumeClick() {
        this.isMute = this.isMute ? false : true;
        this.props.changeVolumeMode(this.isMute);
        this.updateStorage(this.isMute);
    }
    render() {
        return <MainHeader isMute={this.isMute} toggleVolume={this.changeVolumeClick.bind(this)} />
    }
}

const mapStateToProps = (state) => ({ isMute: state.headerElement.isMute });

const mapDispatchToProps = (dispatch) => {
    return {
        changeVolumeMode: (value) => {
            let action = updateVolumeActionCreater(value);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderContiner);
