import React, { useState, useEffect } from 'react';
import '../../../App.scss';
import KryptosInfoBar from '../KryptosInfoBar/KryptosInfoBar';
import KryptosQuestion from '../KryptosQuestion/KryptosQuestion';
import KryptosHintModal from '../KryptosHintModal/KryptosHintModal';
import {
  NO_LEVELS_LEFT,
  MESSAGE_WHEN_ALL_LEVELS_COMPLETE,
  MESSAGE_WHEN_CORRECT_ANSWER,
  MESSAGE_WHEN_WRONG_ANSWER,
  NO_HINTS,
} from '../../common/Constants';
import {
  fetchQuestion,
  fetchRank,
  submitKryptosAnswer,
  getStaticAsset,
} from '../KryptosApi/ApiCalls';

const KryptosPlay = () => {
  const [level, setLevel] = useState(1);
  const [rank, setRank] = useState(0);
  const [imgUrl, setImgUrl] = useState('');
  const [sourceHint, setSourceHint] = useState('');
  const [hintText, setHintText] = useState([NO_HINTS]);

  useEffect(() => {
    fetchQuestion().then(data => {
      if (!data.completed) {
        if (data.filetype !== 'NI') {
          setImgUrl(getStaticAsset(data.level_file));
        }
        setLevel(data.level);
        setSourceHint(data.source_hint);
        if (data.hints.length) {
          const hints = data.hints.map(e => {
            return e.hint;
          });
          setHintText(hints);
        }
      } else {
        window.alert(MESSAGE_WHEN_ALL_LEVELS_COMPLETE);
        setLevel(NO_LEVELS_LEFT);
      }
    });

    fetchRank().then(data => {
      if (data.kryptos) setRank(data.kryptos.rank);
      else setRank(1);
    });
  }, []);

  const onSubmit = ans => {
    submitKryptosAnswer(ans).then(data => {
      if (data.answer === 'Correct') {
        window.alert(MESSAGE_WHEN_CORRECT_ANSWER);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        window.alert(MESSAGE_WHEN_WRONG_ANSWER);
      }
    });
  };

  return (
    <div>
      <KryptosInfoBar level={level} rank={rank} />
      <KryptosQuestion
        imgUrl={imgUrl}
        sourceHint={sourceHint}
        onSubmit={ans => onSubmit(ans)}
      />
      <KryptosHintModal hintText={hintText} />
    </div>
  );
};

export default KryptosPlay;
