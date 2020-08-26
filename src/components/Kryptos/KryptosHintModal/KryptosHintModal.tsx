import React, {FunctionComponent} from 'react';
import './KryptosHintModal.scss';
import { any } from 'prop-types';

type Props = {
  hintText: any
}

const KryptosHintModal : FunctionComponent<Props> = (props) => {
  const { hintText } = props;

  const hints = () => {
    const hintList = [];
    hintText.forEach(h => {
      hintList.push(<li>{h}</li>);
    });
    return (
      <div>
        <ul>{hintList}</ul>
      </div>
    );
  };

  return (
    <div id="hint-modal" className="modal fade" role="dialog">
      {/* Modal triggered by view hint button in KryptosQuestion */}
      <div className="modal-dialog">
        <div className="modal-content">{hints()}</div>
      </div>
    </div>
  );
};

export default KryptosHintModal;
