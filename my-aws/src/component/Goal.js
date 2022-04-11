import {react} from 'react'
import HitGoal from './HitGoal';
import MissedGoal from './MissedGoal';

function Goal(props)
{
    const isGoal = props.isGoal;

    if(isGoal){
        return <HitGoal/>
    }
    return <MissedGoal/>

    return (
        <div>
        </div>
    )
}

export default Goal;