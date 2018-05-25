import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  describe('<Display />', () => {
    it('should render a div with class `component-display', () => {
      const component = shallow(<Display value={"6"} />);
      expect(component.contains(
        <div className="display-value">
        6
        </div>
      )).toEqual(true);
    });
  });
});