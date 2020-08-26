import React, {FunctionComponent} from 'react';
import './KryptosInfoBar.scss';

type Props = {
  level : any
  rank : any
}

const KryptosInfoBar: FunctionComponent<Props> = (props) => {
  const { level, rank } = props;
  return (
    <div className="wrapper">
      LEVEL<span className="emphasis">{level}</span>&nbsp;&nbsp; RANK
      <span className="emphasis">{rank}</span>
    </div>
  );
};

export default KryptosInfoBar;
