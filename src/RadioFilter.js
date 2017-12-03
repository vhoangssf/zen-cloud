import React from 'react';
import { Radio, Well } from 'react-bootstrap';

class RadioFilter extends React.Component {
  render() {
    return (
      <Well>
        <b>Teacher</b>
          <Radio readOnly>
            Thich Nhat Thanh
          </Radio>
          <Radio readOnly>
            Sister Chan Kong
          </Radio>
          <Radio readOnly>
            Phap Luu
          </Radio>
          <Radio readOnly>
            Phap Dung
          </Radio>
          <Radio readOnly>
            Phap Lai
          </Radio>

        <b>Language</b>
          <Radio readOnly>
            English
          </Radio>
          <Radio readOnly>
            French
          </Radio>
          <Radio readOnly>
            Vietnamese
          </Radio>
          <Radio readOnly>
            German
          </Radio>

        <b>Location</b>
          <Radio readOnly>
            Plum Village
          </Radio>
          <Radio readOnly>
            Deer Park
          </Radio>
          <Radio readOnly>
            Phap Luu
          </Radio>
          <Radio readOnly>
            Phap Dung
          </Radio>
          <Radio readOnly>
            Phap Lai
          </Radio>

        <b>Aspect of Dharma</b>
          <Radio readOnly>
            Mindfulness
          </Radio>
          <Radio readOnly>
            Meditation
          </Radio>
          <Radio readOnly>
            Walking Meditation
          </Radio>
          <Radio readOnly>
            Breathing
          </Radio>
          <Radio readOnly>
            4 Nobel Truths
          </Radio>
          <Radio readOnly>
            8 Fold Nobel Path
          </Radio>

        <b>Length of Content</b>
          <Radio readOnly>
            Long
          </Radio>
          <Radio readOnly>
            Medium
          </Radio>
          <Radio readOnly>
            Short
          </Radio>
      </Well>
    );
  }
}

export default RadioFilter;
