import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Badge from 'material-ui/Badge';

export default class CategoryItem extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Link to={`/tasks/${this.props.path}`} style={{textDecoration: 'none'}}>
                <MenuItem
                    rightIcon={
                        <Badge
                            badgeContent={this.props.tasks}
                            primary={true}
                        />
                    }
                    onTouchTap={() => {
                        this.props.handleClose()
                    }}
                    primaryText={this.props.name}
                />
            </Link>

        );
    }
}
