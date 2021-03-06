import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../../../components/Button';

export const PurpleSolidButton = styled(Button)`
  background-color: #583874;
  color: #fff;
  font-size: 1rem;

  width: 18.4rem;
  &:hover {
    background: ${shade(0.2, '#583874')};
  }
`;

export const NotFoundAddressMessage = styled.p`
  margin: -54px 0 0 28px;

  font-weight: bold;
  font-size: 1.1rem;
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0),
    },
    container: {
      padding: theme.spacing(0, 3, 4),

      '& h2': {
        color: '#e06b50',
        marginLeft: '3px',
      },
    },
  }),
);
