import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../../../../../../components/Button';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    product: {
      padding: theme.spacing(2, 0),
    },
    media: {
      height: '12rem',
      backgroundSize: 'contain',
    },
    detail: {
      alignSelf: 'center',
    },
    titleLine: {
      padding: theme.spacing(1.5, 0),
      fontWeight: 'bold',
      fontSize: '1.2rem',
    },
    descriptionLine: {
      padding: theme.spacing(1, 0),
    },
    buttonsSection: {
      textAlign: 'right',
      padding: theme.spacing(0, 1.5),
    },
  }),
);

export const PurpleSolidButton = styled(Button)`
  background-color: #6060ab;
  color: white;
  max-width: 18.4rem;
  &:hover {
    background: ${shade(0.2, '#5454A0')};
  }
`;

export const PurpleOutlineButton = styled(Button)`
  background-color: transparent;
  border: 2px solid #6060ab;
  color: #6060ab;
  max-width: 18.4rem;
  &:hover {
    background: ${shade(0.1, '#5454A0')};
    color: ${shade(0, '#FFFFFF')};
    border: 2px solid '#5454A0';
  }
`;
