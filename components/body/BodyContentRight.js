import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FolderList() {
    const classes = useStyles();

    return (
        <div className="BodyContentRight">
            <List className={classes.root}>
                <ListItem className="BodyContentRight__item">
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Templates" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem className="BodyContentRight__item">
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem className="BodyContentRight__item">
                    <ListItemAvatar>
                        <Avatar>
                            <AssessmentIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Reports" secondary="July 20, 2014" />
                </ListItem>
            </List>
        </div>
    );
}