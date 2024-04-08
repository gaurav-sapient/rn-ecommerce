import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomVectorIconProps} from './types';

const CustomVectorIcon: React.FC<CustomVectorIconProps> = ({
  name,
  color,
  size = 26,
}) => {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
};

export default CustomVectorIcon;
