import React ,{FunctionComponent}from 'react';
import { Route, Switch } from 'react-router-dom';
import { GameHeader, MItem } from '../common/GameHeader/GameHeader';
import withLogin from '../HOC/withLogin';
import '../../App.scss';
import kryptosLogo from '../../assets/kryptosc_500.png';
import KryptosPlay from './KryptosPlay/KryptosPlay';
import KryptosRules from './KryptosRules/KryptosRules';
import KryptosRanklist from './KryptosRanklist/KryptosRanklist';

type Props = {
  match:any
}

const Kryptos: FunctionComponent<Props> = (props) => {
  const { match } = props;
  return (
    <div>
      <GameHeader gName="KRYPTOS" icon={kryptosLogo}>
        <MItem text="Rules" link="/Kryptos/rules" />
        <MItem text="Play" link="/Kryptos" />
        <MItem text="Ranklist" link="/Kryptos/ranklist" />
      </GameHeader>
      <Switch>
        <Route exact path={`${match.url}/`} component={KryptosPlay} />
        <Route exact path={`${match.url}/rules`} component={KryptosRules} />
        <Route
          exact
          path={`${match.url}/ranklist`}
          component={KryptosRanklist}
        />
      </Switch>
    </div>
  );
};

export default withLogin(Kryptos);
