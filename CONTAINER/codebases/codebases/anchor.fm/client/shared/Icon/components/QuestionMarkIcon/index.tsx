import React from 'react';

type FillColor = string;
type ClassName = string;

interface Props {
  fillColor: FillColor;
  className: ClassName;
}

const defaultProps = {
  className: '',
  fillColor: '#53585E',
};

const QuestionMarkIcon = ({
  fillColor,
  className,
}: Props): React.ReactElement<React.ReactNode> => (
  <svg
    viewBox="0 0 4 6"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g fill="none" fillRule="evenodd" fillOpacity="0.8">
      <g fill={fillColor} fillRule="nonzero">
        <path d="M2.35652258,5.77950933 C2.24039107,5.8828542 2.10580357,5.93479293 1.95333898,5.93479293 C1.79559464,5.93479293 1.65799675,5.88378044 1.5405453,5.7815702 C1.42290859,5.67954522 1.36397445,5.53669634 1.36397445,5.35316252 C1.36397445,5.19035324 1.42100973,5.05331651 1.53470978,4.94226071 C1.64840982,4.83120492 1.78788342,4.77567702 1.95333898,4.77567702 C2.11615467,4.77567702 2.2531968,4.83120492 2.36444222,4.94226071 C2.47550239,5.05331651 2.53121773,5.19033009 2.53121773,5.35316252 C2.53100931,5.53405657 2.47283935,5.67618761 2.35652258,5.77950933 Z" />
        <path d="M3.80458876,2.1896933 C3.71536548,2.35514235 3.60939982,2.49780598 3.48648336,2.61810098 C3.3639374,2.73837283 3.14353068,2.94052402 2.82540212,3.22473979 C2.73768404,3.30492874 2.66710202,3.37532274 2.61421181,3.43592178 C2.56132161,3.49672923 2.52179289,3.55223397 2.49599618,3.60269072 C2.47001422,3.65312431 2.45007619,3.70358106 2.43595052,3.75401466 C2.42182485,3.804263 2.40056688,3.89292702 2.37175978,4.01958991 C2.32282939,4.28838383 2.16904487,4.42275764 1.91059147,4.42275764 C1.77618922,4.42275764 1.66325335,4.37890033 1.57120494,4.29100045 C1.47952704,4.20310058 1.4337923,4.07266328 1.4337923,3.89950331 C1.4337923,3.68248602 1.46748549,3.49443679 1.53468662,3.33540193 C1.60151724,3.17634391 1.69092576,3.0368758 1.80198593,2.91660395 C1.91323135,2.7963321 2.06305605,2.65364532 2.2518537,2.48819627 C2.41730927,2.34344861 2.53684484,2.2342916 2.61043725,2.16067893 C2.68421491,2.08690417 2.74615944,2.00483959 2.79640976,1.91448519 C2.84705376,1.82394554 2.87190104,1.72588021 2.87190104,1.61991872 C2.87190104,1.41306689 2.79529824,1.23877227 2.64132846,1.09666439 C2.48754394,0.954556506 2.2891362,0.883398363 2.04612841,0.883398363 C1.7617162,0.883398363 1.5524016,0.955112248 1.41799934,1.09854002 C1.28359709,1.24196779 1.17010546,1.45314978 1.07692236,1.7322944 C0.988833776,2.0244295 0.822058272,2.17047389 0.576781108,2.17047389 C0.432027751,2.17047389 0.309875463,2.11946139 0.210301085,2.01743641 C0.110911962,1.91541142 0.061217401,1.80493453 0.061217401,1.68598256 C0.061217401,1.44052981 0.140089571,1.19169629 0.297648655,0.939667249 C0.455392995,0.687638212 0.685409806,0.47888759 0.987884346,0.313623786 C1.29017363,0.148174735 1.64313006,0.0653460073 2.04612841,0.0653460073 C2.42089858,0.0653460073 2.75162445,0.134605365 3.03849129,0.27296199 C3.32535812,0.411110211 3.54708479,0.59915944 3.70350919,0.837063366 C3.85974833,1.07478204 3.93804158,1.33322527 3.93804158,1.61236989 C3.93841209,1.83167961 3.89381203,2.02424425 3.80458876,2.1896933 Z" />
      </g>
    </g>
  </svg>
);

QuestionMarkIcon.defaultProps = defaultProps;

export default QuestionMarkIcon;
