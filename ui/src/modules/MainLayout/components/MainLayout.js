// Copyright 2020 Paul Sitoh
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// React
import React from 'react';

// Material ui
import { makeStyles } from '@material-ui/core/styles';

import Topbar from './Topbar';
import Footer from './Footer';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const MainLayout = () =>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Topbar />
            <Footer />
        </div>
    );
};

export default MainLayout;