import './HomeFirst.css';
import * as SectionDiv from 'app/components/molecules';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
const BodyDiv: any = SectionDiv.SectionDiv;
const random = Math.random().toString();

const random2 = Math.random().toString();
const random3 = Math.random().toString();
const random4 = Math.random().toString();

const AwesomeSvg = props => (
  <svg
    width={197}
    height={59}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter={`url(#${random})`}>
      <mask
        id={`${random2}`}
        maskUnits="userSpaceOnUse"
        x={-1.109}
        y={-6.913}
        width={198.407}
        height={57.976}
        fill="#000"
      >
        <path fill="#fff" d="M-1.109-6.913h198.407v57.976H-1.109z" />
        <path d="M12.892 20.417c2.365-.332 4.491-.159 6.377.521 1.886.68 3.444 1.854 4.673 3.521 1.229 1.668 2.023 3.782 2.383 6.342l1.97 14.01-5.927.833-.863-6.145-11.706 1.645.864 6.145-5.853.822-1.969-14.01c-.36-2.56-.178-4.81.543-6.752.722-1.942 1.896-3.5 3.521-4.673 1.626-1.174 3.622-1.926 5.987-2.259Zm7.944 14.326-.514-3.658c-.298-2.121-1.047-3.645-2.246-4.57-1.203-.95-2.707-1.299-4.511-1.045-1.83.257-3.19 1.008-4.085 2.253-.874 1.217-1.161 2.886-.863 5.008l.514 3.657 11.705-1.645ZM62.103 19.991l1.527 10.864c.408 2.902-.07 5.257-1.431 7.065-1.363 1.808-3.507 2.917-6.433 3.329-1.415.198-2.701.155-3.86-.13-1.135-.288-2.137-.868-3.005-1.74-.595 1.078-1.398 1.912-2.41 2.502-1.01.59-2.248.987-3.71 1.193-2.952.414-5.319-.061-7.102-1.427-1.784-1.366-2.88-3.5-3.287-6.401L30.865 24.38l5.706-.801 1.465 10.425c.23 1.633.68 2.801 1.35 3.503.668.677 1.599.931 2.794.763 1.22-.17 2.067-.688 2.542-1.55.476-.863.6-2.1.374-3.709l-1.465-10.425 5.706-.802 1.466 10.425c.226 1.61.686 2.764 1.381 3.462.695.698 1.652.961 2.872.79 1.195-.168 2.02-.67 2.474-1.504.451-.86.562-2.106.332-3.74l-1.465-10.425 5.706-.802ZM79.31 33.277c1.024-.144 1.905-.417 2.645-.82.76-.43 1.435-1.022 2.025-1.776l3.499 2.865c-1.555 2.382-4.113 3.824-7.673 4.324-2.22.312-4.242.161-6.07-.453-1.83-.638-3.316-1.66-4.459-3.066-1.142-1.406-1.85-3.084-2.125-5.035-.27-1.927-.063-3.721.623-5.385a9.697 9.697 0 0 1 3.26-4.15c1.485-1.104 3.228-1.797 5.228-2.078 1.877-.264 3.641-.101 5.29.487 1.646.565 3.027 1.54 4.142 2.925 1.135 1.357 1.847 3.06 2.135 5.108l-14.163 4.863c.552.917 1.301 1.558 2.248 1.922.97.361 2.102.45 3.394.269Zm-2.44-11.258c-1.44.202-2.545.83-3.317 1.884-.772 1.053-1.068 2.4-.887 4.041l9.322-3.212c-.412-.987-1.076-1.727-1.99-2.22-.916-.493-1.958-.657-3.129-.493ZM99.736 35.069c-1.634.23-3.258.259-4.874.088-1.619-.195-2.935-.532-3.947-1.012l1.326-4.364c.957.438 2.083.752 3.378.943 1.292.166 2.535.166 3.73-.002 2.414-.34 3.537-1.107 3.369-2.302-.079-.56-.464-.917-1.157-1.068-.693-.151-1.734-.216-3.123-.195-1.644-.018-3.013-.111-4.106-.281a6.375 6.375 0 0 1-2.98-1.297c-.869-.698-1.408-1.791-1.617-3.28-.175-1.243.025-2.39.598-3.44.595-1.079 1.537-1.982 2.827-2.71 1.315-.732 2.911-1.23 4.789-1.494 1.39-.195 2.79-.23 4.2-.105 1.431.097 2.636.35 3.613.76l-1.331 4.328c-1.869-.732-3.827-.955-5.876-.667-1.219.172-2.11.471-2.671.898-.562.427-.805.909-.73 1.445.086.61.475.99 1.168 1.142.693.151 1.774.236 3.244.253 1.647.042 3.005.15 4.074.323a5.851 5.851 0 0 1 2.901 1.27c.869.699 1.405 1.767 1.607 3.206.171 1.22-.042 2.356-.64 3.41-.598 1.054-1.566 1.948-2.905 2.684-1.318.707-2.94 1.196-4.867 1.467ZM121.912 31.952c-2.073.292-3.998.127-5.776-.493-1.758-.649-3.208-1.676-4.35-3.082-1.143-1.406-1.851-3.084-2.125-5.035-.275-1.951-.056-3.76.654-5.426.711-1.667 1.824-3.042 3.337-4.125 1.535-1.111 3.339-1.812 5.412-2.103 2.073-.292 3.988-.113 5.745.535 1.754.624 3.202 1.639 4.345 3.045 1.142 1.406 1.851 3.084 2.125 5.035s.056 3.76-.655 5.427c-.711 1.666-1.821 3.053-3.332 4.16-1.514 1.084-3.307 1.771-5.38 2.062Zm-.658-4.682c1.463-.205 2.59-.861 3.379-1.967.811-1.133 1.099-2.53.866-4.187-.233-1.659-.893-2.909-1.981-3.75-1.068-.87-2.333-1.202-3.796-.996-1.463.205-2.6.875-3.411 2.008-.813 1.11-1.104 2.493-.871 4.151.233 1.659.895 2.92 1.987 3.787 1.088.842 2.364 1.16 3.827.954ZM158.872 6.093c2.463-.346 4.516.111 6.161 1.372 1.665 1.233 2.702 3.3 3.11 6.203l1.583 11.266-5.706.802-1.46-10.388c-.22-1.561-.712-2.673-1.476-3.337-.744-.69-1.713-.952-2.908-.784-1.341.188-2.34.776-2.997 1.764-.661.963-.871 2.298-.631 4.005l1.388 9.876-5.706.802-1.46-10.388c-.436-3.097-1.897-4.471-4.384-4.121-1.317.185-2.304.77-2.961 1.759-.661.963-.871 2.298-.631 4.005l1.388 9.876-5.706.802-2.766-19.68 5.45-.765.319 2.268a7.305 7.305 0 0 1 2.403-2.278c1.011-.59 2.151-.974 3.419-1.152 1.39-.195 2.685-.091 3.886.312a6.606 6.606 0 0 1 3.041 1.997 8.183 8.183 0 0 1 2.702-2.804c1.165-.736 2.479-1.206 3.942-1.412ZM184.367 18.512c1.024-.144 1.905-.417 2.645-.82.76-.43 1.435-1.021 2.025-1.776l3.499 2.866c-1.555 2.381-4.113 3.823-7.673 4.323-2.219.312-4.242.161-6.069-.453-1.831-.637-3.317-1.66-4.46-3.066-1.142-1.406-1.851-3.084-2.125-5.035-.271-1.927-.063-3.721.624-5.384a9.695 9.695 0 0 1 3.258-4.151c1.486-1.104 3.229-1.797 5.229-2.078 1.878-.264 3.641-.101 5.291.487 1.646.565 3.026 1.54 4.141 2.925 1.135 1.357 1.847 3.06 2.135 5.108l-14.162 4.863c.551.917 1.3 1.558 2.247 1.922.97.361 2.102.45 3.395.27Zm-2.441-11.258c-1.438.203-2.544.83-3.316 1.884-.772 1.053-1.067 2.4-.887 4.041l9.322-3.212c-.412-.987-1.076-1.727-1.991-2.22-.914-.493-1.957-.657-3.128-.493Z" />
      </mask>
      <path
        d="M12.892 20.417c2.365-.332 4.491-.159 6.377.521 1.886.68 3.444 1.854 4.673 3.521 1.229 1.668 2.023 3.782 2.383 6.342l1.97 14.01-5.927.833-.863-6.145-11.706 1.645.864 6.145-5.853.822-1.969-14.01c-.36-2.56-.178-4.81.543-6.752.722-1.942 1.896-3.5 3.521-4.673 1.626-1.174 3.622-1.926 5.987-2.259Zm7.944 14.326-.514-3.658c-.298-2.121-1.047-3.645-2.246-4.57-1.203-.95-2.707-1.299-4.511-1.045-1.83.257-3.19 1.008-4.085 2.253-.874 1.217-1.161 2.886-.863 5.008l.514 3.657 11.705-1.645ZM62.103 19.991l1.527 10.864c.408 2.902-.07 5.257-1.431 7.065-1.363 1.808-3.507 2.917-6.433 3.329-1.415.198-2.701.155-3.86-.13-1.135-.288-2.137-.868-3.005-1.74-.595 1.078-1.398 1.912-2.41 2.502-1.01.59-2.248.987-3.71 1.193-2.952.414-5.319-.061-7.102-1.427-1.784-1.366-2.88-3.5-3.287-6.401L30.865 24.38l5.706-.801 1.465 10.425c.23 1.633.68 2.801 1.35 3.503.668.677 1.599.931 2.794.763 1.22-.17 2.067-.688 2.542-1.55.476-.863.6-2.1.374-3.709l-1.465-10.425 5.706-.802 1.466 10.425c.226 1.61.686 2.764 1.381 3.462.695.698 1.652.961 2.872.79 1.195-.168 2.02-.67 2.474-1.504.451-.86.562-2.106.332-3.74l-1.465-10.425 5.706-.802ZM79.31 33.277c1.024-.144 1.905-.417 2.645-.82.76-.43 1.435-1.022 2.025-1.776l3.499 2.865c-1.555 2.382-4.113 3.824-7.673 4.324-2.22.312-4.242.161-6.07-.453-1.83-.638-3.316-1.66-4.459-3.066-1.142-1.406-1.85-3.084-2.125-5.035-.27-1.927-.063-3.721.623-5.385a9.697 9.697 0 0 1 3.26-4.15c1.485-1.104 3.228-1.797 5.228-2.078 1.877-.264 3.641-.101 5.29.487 1.646.565 3.027 1.54 4.142 2.925 1.135 1.357 1.847 3.06 2.135 5.108l-14.163 4.863c.552.917 1.301 1.558 2.248 1.922.97.361 2.102.45 3.394.269Zm-2.44-11.258c-1.44.202-2.545.83-3.317 1.884-.772 1.053-1.068 2.4-.887 4.041l9.322-3.212c-.412-.987-1.076-1.727-1.99-2.22-.916-.493-1.958-.657-3.129-.493ZM99.736 35.069c-1.634.23-3.258.259-4.874.088-1.619-.195-2.935-.532-3.947-1.012l1.326-4.364c.957.438 2.083.752 3.378.943 1.292.166 2.535.166 3.73-.002 2.414-.34 3.537-1.107 3.369-2.302-.079-.56-.464-.917-1.157-1.068-.693-.151-1.734-.216-3.123-.195-1.644-.018-3.013-.111-4.106-.281a6.375 6.375 0 0 1-2.98-1.297c-.869-.698-1.408-1.791-1.617-3.28-.175-1.243.025-2.39.598-3.44.595-1.079 1.537-1.982 2.827-2.71 1.315-.732 2.911-1.23 4.789-1.494 1.39-.195 2.79-.23 4.2-.105 1.431.097 2.636.35 3.613.76l-1.331 4.328c-1.869-.732-3.827-.955-5.876-.667-1.219.172-2.11.471-2.671.898-.562.427-.805.909-.73 1.445.086.61.475.99 1.168 1.142.693.151 1.774.236 3.244.253 1.647.042 3.005.15 4.074.323a5.851 5.851 0 0 1 2.901 1.27c.869.699 1.405 1.767 1.607 3.206.171 1.22-.042 2.356-.64 3.41-.598 1.054-1.566 1.948-2.905 2.684-1.318.707-2.94 1.196-4.867 1.467ZM121.912 31.952c-2.073.292-3.998.127-5.776-.493-1.758-.649-3.208-1.676-4.35-3.082-1.143-1.406-1.851-3.084-2.125-5.035-.275-1.951-.056-3.76.654-5.426.711-1.667 1.824-3.042 3.337-4.125 1.535-1.111 3.339-1.812 5.412-2.103 2.073-.292 3.988-.113 5.745.535 1.754.624 3.202 1.639 4.345 3.045 1.142 1.406 1.851 3.084 2.125 5.035s.056 3.76-.655 5.427c-.711 1.666-1.821 3.053-3.332 4.16-1.514 1.084-3.307 1.771-5.38 2.062Zm-.658-4.682c1.463-.205 2.59-.861 3.379-1.967.811-1.133 1.099-2.53.866-4.187-.233-1.659-.893-2.909-1.981-3.75-1.068-.87-2.333-1.202-3.796-.996-1.463.205-2.6.875-3.411 2.008-.813 1.11-1.104 2.493-.871 4.151.233 1.659.895 2.92 1.987 3.787 1.088.842 2.364 1.16 3.827.954ZM158.872 6.093c2.463-.346 4.516.111 6.161 1.372 1.665 1.233 2.702 3.3 3.11 6.203l1.583 11.266-5.706.802-1.46-10.388c-.22-1.561-.712-2.673-1.476-3.337-.744-.69-1.713-.952-2.908-.784-1.341.188-2.34.776-2.997 1.764-.661.963-.871 2.298-.631 4.005l1.388 9.876-5.706.802-1.46-10.388c-.436-3.097-1.897-4.471-4.384-4.121-1.317.185-2.304.77-2.961 1.759-.661.963-.871 2.298-.631 4.005l1.388 9.876-5.706.802-2.766-19.68 5.45-.765.319 2.268a7.305 7.305 0 0 1 2.403-2.278c1.011-.59 2.151-.974 3.419-1.152 1.39-.195 2.685-.091 3.886.312a6.606 6.606 0 0 1 3.041 1.997 8.183 8.183 0 0 1 2.702-2.804c1.165-.736 2.479-1.206 3.942-1.412ZM184.367 18.512c1.024-.144 1.905-.417 2.645-.82.76-.43 1.435-1.021 2.025-1.776l3.499 2.866c-1.555 2.381-4.113 3.823-7.673 4.323-2.219.312-4.242.161-6.069-.453-1.831-.637-3.317-1.66-4.46-3.066-1.142-1.406-1.851-3.084-2.125-5.035-.271-1.927-.063-3.721.624-5.384a9.695 9.695 0 0 1 3.258-4.151c1.486-1.104 3.229-1.797 5.229-2.078 1.878-.264 3.641-.101 5.291.487 1.646.565 3.026 1.54 4.141 2.925 1.135 1.357 1.847 3.06 2.135 5.108l-14.162 4.863c.551.917 1.3 1.558 2.247 1.922.97.361 2.102.45 3.395.27Zm-2.441-11.258c-1.438.203-2.544.83-3.316 1.884-.772 1.053-1.067 2.4-.887 4.041l9.322-3.212c-.412-.987-1.076-1.727-1.991-2.22-.914-.493-1.957-.657-3.128-.493Z"
        fill="#FBECF0"
      />
      <path
        d="M12.892 20.417c2.365-.332 4.491-.159 6.377.521 1.886.68 3.444 1.854 4.673 3.521 1.229 1.668 2.023 3.782 2.383 6.342l1.97 14.01-5.927.833-.863-6.145-11.706 1.645.864 6.145-5.853.822-1.969-14.01c-.36-2.56-.178-4.81.543-6.752.722-1.942 1.896-3.5 3.521-4.673 1.626-1.174 3.622-1.926 5.987-2.259Zm7.944 14.326-.514-3.658c-.298-2.121-1.047-3.645-2.246-4.57-1.203-.95-2.707-1.299-4.511-1.045-1.83.257-3.19 1.008-4.085 2.253-.874 1.217-1.161 2.886-.863 5.008l.514 3.657 11.705-1.645ZM62.103 19.991l1.527 10.864c.408 2.902-.07 5.257-1.431 7.065-1.363 1.808-3.507 2.917-6.433 3.329-1.415.198-2.701.155-3.86-.13-1.135-.288-2.137-.868-3.005-1.74-.595 1.078-1.398 1.912-2.41 2.502-1.01.59-2.248.987-3.71 1.193-2.952.414-5.319-.061-7.102-1.427-1.784-1.366-2.88-3.5-3.287-6.401L30.865 24.38l5.706-.801 1.465 10.425c.23 1.633.68 2.801 1.35 3.503.668.677 1.599.931 2.794.763 1.22-.17 2.067-.688 2.542-1.55.476-.863.6-2.1.374-3.709l-1.465-10.425 5.706-.802 1.466 10.425c.226 1.61.686 2.764 1.381 3.462.695.698 1.652.961 2.872.79 1.195-.168 2.02-.67 2.474-1.504.451-.86.562-2.106.332-3.74l-1.465-10.425 5.706-.802ZM79.31 33.277c1.024-.144 1.905-.417 2.645-.82.76-.43 1.435-1.022 2.025-1.776l3.499 2.865c-1.555 2.382-4.113 3.824-7.673 4.324-2.22.312-4.242.161-6.07-.453-1.83-.638-3.316-1.66-4.459-3.066-1.142-1.406-1.85-3.084-2.125-5.035-.27-1.927-.063-3.721.623-5.385a9.697 9.697 0 0 1 3.26-4.15c1.485-1.104 3.228-1.797 5.228-2.078 1.877-.264 3.641-.101 5.29.487 1.646.565 3.027 1.54 4.142 2.925 1.135 1.357 1.847 3.06 2.135 5.108l-14.163 4.863c.552.917 1.301 1.558 2.248 1.922.97.361 2.102.45 3.394.269Zm-2.44-11.258c-1.44.202-2.545.83-3.317 1.884-.772 1.053-1.068 2.4-.887 4.041l9.322-3.212c-.412-.987-1.076-1.727-1.99-2.22-.916-.493-1.958-.657-3.129-.493ZM99.736 35.069c-1.634.23-3.258.259-4.874.088-1.619-.195-2.935-.532-3.947-1.012l1.326-4.364c.957.438 2.083.752 3.378.943 1.292.166 2.535.166 3.73-.002 2.414-.34 3.537-1.107 3.369-2.302-.079-.56-.464-.917-1.157-1.068-.693-.151-1.734-.216-3.123-.195-1.644-.018-3.013-.111-4.106-.281a6.375 6.375 0 0 1-2.98-1.297c-.869-.698-1.408-1.791-1.617-3.28-.175-1.243.025-2.39.598-3.44.595-1.079 1.537-1.982 2.827-2.71 1.315-.732 2.911-1.23 4.789-1.494 1.39-.195 2.79-.23 4.2-.105 1.431.097 2.636.35 3.613.76l-1.331 4.328c-1.869-.732-3.827-.955-5.876-.667-1.219.172-2.11.471-2.671.898-.562.427-.805.909-.73 1.445.086.61.475.99 1.168 1.142.693.151 1.774.236 3.244.253 1.647.042 3.005.15 4.074.323a5.851 5.851 0 0 1 2.901 1.27c.869.699 1.405 1.767 1.607 3.206.171 1.22-.042 2.356-.64 3.41-.598 1.054-1.566 1.948-2.905 2.684-1.318.707-2.94 1.196-4.867 1.467ZM121.912 31.952c-2.073.292-3.998.127-5.776-.493-1.758-.649-3.208-1.676-4.35-3.082-1.143-1.406-1.851-3.084-2.125-5.035-.275-1.951-.056-3.76.654-5.426.711-1.667 1.824-3.042 3.337-4.125 1.535-1.111 3.339-1.812 5.412-2.103 2.073-.292 3.988-.113 5.745.535 1.754.624 3.202 1.639 4.345 3.045 1.142 1.406 1.851 3.084 2.125 5.035s.056 3.76-.655 5.427c-.711 1.666-1.821 3.053-3.332 4.16-1.514 1.084-3.307 1.771-5.38 2.062Zm-.658-4.682c1.463-.205 2.59-.861 3.379-1.967.811-1.133 1.099-2.53.866-4.187-.233-1.659-.893-2.909-1.981-3.75-1.068-.87-2.333-1.202-3.796-.996-1.463.205-2.6.875-3.411 2.008-.813 1.11-1.104 2.493-.871 4.151.233 1.659.895 2.92 1.987 3.787 1.088.842 2.364 1.16 3.827.954ZM158.872 6.093c2.463-.346 4.516.111 6.161 1.372 1.665 1.233 2.702 3.3 3.11 6.203l1.583 11.266-5.706.802-1.46-10.388c-.22-1.561-.712-2.673-1.476-3.337-.744-.69-1.713-.952-2.908-.784-1.341.188-2.34.776-2.997 1.764-.661.963-.871 2.298-.631 4.005l1.388 9.876-5.706.802-1.46-10.388c-.436-3.097-1.897-4.471-4.384-4.121-1.317.185-2.304.77-2.961 1.759-.661.963-.871 2.298-.631 4.005l1.388 9.876-5.706.802-2.766-19.68 5.45-.765.319 2.268a7.305 7.305 0 0 1 2.403-2.278c1.011-.59 2.151-.974 3.419-1.152 1.39-.195 2.685-.091 3.886.312a6.606 6.606 0 0 1 3.041 1.997 8.183 8.183 0 0 1 2.702-2.804c1.165-.736 2.479-1.206 3.942-1.412ZM184.367 18.512c1.024-.144 1.905-.417 2.645-.82.76-.43 1.435-1.021 2.025-1.776l3.499 2.866c-1.555 2.381-4.113 3.823-7.673 4.323-2.219.312-4.242.161-6.069-.453-1.831-.637-3.317-1.66-4.46-3.066-1.142-1.406-1.851-3.084-2.125-5.035-.271-1.927-.063-3.721.624-5.384a9.695 9.695 0 0 1 3.258-4.151c1.486-1.104 3.229-1.797 5.229-2.078 1.878-.264 3.641-.101 5.291.487 1.646.565 3.026 1.54 4.141 2.925 1.135 1.357 1.847 3.06 2.135 5.108l-14.162 4.863c.551.917 1.3 1.558 2.247 1.922.97.361 2.102.45 3.395.27Zm-2.441-11.258c-1.438.203-2.544.83-3.316 1.884-.772 1.053-1.067 2.4-.887 4.041l9.322-3.212c-.412-.987-1.076-1.727-1.991-2.22-.914-.493-1.957-.657-3.128-.493Z"
        stroke="#0D0D0D"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        mask={`url(#${random2})`}
      />
    </g>
    <defs>
      <filter
        id={`${random}`}
        x={0.662}
        y={0.816}
        width={196.225}
        height={57.296}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={8} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.839216 0 0 0 0 0.270588 0 0 0 0 0.407843 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1198_26920"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1198_26920"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const AwesomeSvgMobile = props => (
  <svg
    width={144}
    height={39}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter={`url(#${random3})`}>
      <mask
        id={`${random4}`}
        maskUnits="userSpaceOnUse"
        x={-1.388}
        y={-5.982}
        width={145.1}
        height={42.322}
        fill="#000"
      >
        <path fill="#fff" d="M-1.388-5.982h145.1V36.34h-145.1z" />
        <path d="M9.43 14.276c1.702-.239 3.25-.117 4.645.366 1.394.483 2.57 1.318 3.527 2.505.957 1.187 1.617 2.693 1.98 4.518l1.983 9.983-4.263.6-.87-4.38-8.422 1.184.87 4.38-4.21.591-1.984-9.984c-.363-1.824-.32-3.429.126-4.813.446-1.385 1.235-2.496 2.367-3.334 1.132-.838 2.55-1.377 4.251-1.616ZM15.76 24.48l-.518-2.607c-.3-1.512-.904-2.597-1.81-3.256-.91-.675-2.014-.922-3.313-.74-1.315.185-2.273.722-2.872 1.61-.585.868-.727 2.058-.427 3.57l.518 2.606 8.422-1.183ZM45.094 13.926l1.538 7.742c.41 2.068.158 3.747-.758 5.037s-2.427 2.083-4.532 2.378c-1.018.143-1.952.114-2.804-.088a4.995 4.995 0 0 1-2.248-1.238 4.253 4.253 0 0 1-1.647 1.785c-.71.422-1.591.706-2.644.854-2.123.299-3.858-.038-5.205-1.01-1.347-.971-2.226-2.491-2.637-4.56l-1.538-7.741 4.105-.577 1.476 7.429c.232 1.164.604 1.996 1.118 2.495.51.483 1.196.663 2.056.542.877-.123 1.47-.492 1.781-1.108.31-.615.352-1.496.124-2.643l-1.476-7.429 4.106-.577 1.476 7.43c.228 1.146.608 1.968 1.14 2.465.53.497 1.235.684 2.112.56.86-.12 1.438-.479 1.735-1.074.293-.613.324-1.501.092-2.666l-1.476-7.429 4.106-.577ZM58.096 23.38c.737-.104 1.365-.3 1.885-.587.534-.307 1-.73 1.399-1.268l2.65 2.039c-1.033 1.699-2.83 2.729-5.392 3.089-1.596.224-3.07.118-4.418-.317-1.353-.453-2.471-1.18-3.355-2.181-.885-1.002-1.465-2.197-1.74-3.587-.274-1.373-.194-2.653.237-3.839a6.42 6.42 0 0 1 2.198-2.961c1.034-.789 2.27-1.284 3.709-1.486 1.351-.19 2.636-.076 3.855.342a6.99 6.99 0 0 1 3.119 2.08c.877.967 1.46 2.18 1.75 3.64l-10.075 3.479c.437.653 1.005 1.11 1.706 1.368.718.256 1.542.32 2.472.189Zm-2.216-8.022c-1.035.145-1.812.594-2.33 1.345-.517.752-.678 1.712-.482 2.882l6.63-2.299a3.368 3.368 0 0 0-1.53-1.58c-.683-.35-1.446-.466-2.288-.348ZM72.977 24.637a14.617 14.617 0 0 1-3.53.068c-1.182-.138-2.149-.377-2.902-.718l.788-3.111c.712.31 1.54.533 2.487.668.943.118 1.845.116 2.704-.005 1.737-.244 2.521-.792 2.352-1.643-.08-.4-.373-.653-.882-.76-.508-.108-1.265-.153-2.272-.137-1.192-.01-2.188-.076-2.988-.196a4.938 4.938 0 0 1-2.212-.922c-.658-.497-1.092-1.275-1.302-2.335-.177-.886-.077-1.704.297-2.454.388-.769 1.035-1.413 1.942-1.934.924-.523 2.062-.879 3.412-1.069 1-.14 2.014-.167 3.042-.079 1.041.068 1.925.248 2.65.539l-.794 3.085a8.598 8.598 0 0 0-4.286-.469c-.878.123-1.511.337-1.902.642-.39.305-.547.649-.471 1.031.086.435.383.706.892.813.508.107 1.295.166 2.361.177 1.196.028 2.185.104 2.967.226a4.532 4.532 0 0 1 2.154.903c.658.497 1.089 1.258 1.292 2.284.173.868.064 1.679-.328 2.43-.392.752-1.059 1.39-2 1.916-.928.505-2.085.855-3.47 1.05ZM88.932 22.395c-1.491.21-2.894.094-4.207-.346a7.738 7.738 0 0 1-3.277-2.193c-.884-1-1.464-2.196-1.74-3.587-.276-1.39-.19-2.68.26-3.868.448-1.188 1.2-2.17 2.255-2.943 1.069-.793 2.349-1.294 3.84-1.504 1.492-.21 2.887-.084 4.187.376a7.534 7.534 0 0 1 3.27 2.166c.885 1.002 1.465 2.197 1.741 3.588.277 1.39.19 2.679-.26 3.867-.448 1.189-1.199 2.179-2.25 2.97-1.054.773-2.327 1.264-3.819 1.474Zm-.663-3.337c1.053-.148 1.844-.616 2.372-1.405.543-.808.697-1.803.462-2.985-.234-1.182-.763-2.072-1.585-2.671-.809-.619-1.74-.854-2.792-.706-1.053.148-1.85.626-2.393 1.434-.546.792-.702 1.778-.467 2.96.235 1.182.765 2.08 1.59 2.697.823.599 1.76.824 2.813.676ZM114.704 3.929c1.772-.25 3.279.075 4.521.972 1.257.878 2.09 2.35 2.501 4.418l1.595 8.029-4.105.577-1.471-7.403c-.221-1.112-.622-1.905-1.203-2.377-.566-.492-1.279-.677-2.139-.556-.965.135-1.666.555-2.103 1.26-.441.687-.54 1.639-.299 2.855l1.399 7.038-4.106.577-1.471-7.403c-.438-2.207-1.552-3.185-3.342-2.933-.947.133-1.64.552-2.077 1.256-.44.688-.54 1.64-.298 2.856l1.398 7.038-4.105.577-2.787-14.024 3.922-.551.321 1.616a4.85 4.85 0 0 1 1.652-1.626c.71-.42 1.521-.696 2.433-.824 1-.14 1.943-.068 2.83.219a5.157 5.157 0 0 1 2.284 1.42 5.429 5.429 0 0 1 1.848-2.001c.815-.525 1.749-.862 2.802-1.01ZM133.681 12.757c.737-.104 1.366-.3 1.886-.587.534-.307 1-.73 1.398-1.268l2.65 2.039c-1.033 1.7-2.83 2.729-5.392 3.089-1.596.224-3.069.118-4.418-.317-1.352-.453-2.471-1.18-3.355-2.181-.884-1.001-1.464-2.197-1.74-3.587-.273-1.373-.194-2.652.238-3.839a6.419 6.419 0 0 1 2.198-2.961c1.034-.788 2.27-1.284 3.708-1.486 1.351-.19 2.636-.076 3.856.343a6.986 6.986 0 0 1 3.118 2.08c.878.966 1.461 2.18 1.751 3.639l-10.075 3.48c.436.652 1.005 1.108 1.705 1.367.718.257 1.543.32 2.472.189Zm-2.216-8.022c-1.035.145-1.811.594-2.329 1.346-.518.751-.679 1.712-.483 2.88l6.631-2.298a3.366 3.366 0 0 0-1.531-1.58c-.683-.35-1.445-.466-2.288-.348Z" />
      </mask>
      <path
        d="M9.43 14.276c1.702-.239 3.25-.117 4.645.366 1.394.483 2.57 1.318 3.527 2.505.957 1.187 1.617 2.693 1.98 4.518l1.983 9.983-4.263.6-.87-4.38-8.422 1.184.87 4.38-4.21.591-1.984-9.984c-.363-1.824-.32-3.429.126-4.813.446-1.385 1.235-2.496 2.367-3.334 1.132-.838 2.55-1.377 4.251-1.616ZM15.76 24.48l-.518-2.607c-.3-1.512-.904-2.597-1.81-3.256-.91-.675-2.014-.922-3.313-.74-1.315.185-2.273.722-2.872 1.61-.585.868-.727 2.058-.427 3.57l.518 2.606 8.422-1.183ZM45.094 13.926l1.538 7.742c.41 2.068.158 3.747-.758 5.037s-2.427 2.083-4.532 2.378c-1.018.143-1.952.114-2.804-.088a4.995 4.995 0 0 1-2.248-1.238 4.253 4.253 0 0 1-1.647 1.785c-.71.422-1.591.706-2.644.854-2.123.299-3.858-.038-5.205-1.01-1.347-.971-2.226-2.491-2.637-4.56l-1.538-7.741 4.105-.577 1.476 7.429c.232 1.164.604 1.996 1.118 2.495.51.483 1.196.663 2.056.542.877-.123 1.47-.492 1.781-1.108.31-.615.352-1.496.124-2.643l-1.476-7.429 4.106-.577 1.476 7.43c.228 1.146.608 1.968 1.14 2.465.53.497 1.235.684 2.112.56.86-.12 1.438-.479 1.735-1.074.293-.613.324-1.501.092-2.666l-1.476-7.429 4.106-.577ZM58.096 23.38c.737-.104 1.365-.3 1.885-.587.534-.307 1-.73 1.399-1.268l2.65 2.039c-1.033 1.699-2.83 2.729-5.392 3.089-1.596.224-3.07.118-4.418-.317-1.353-.453-2.471-1.18-3.355-2.181-.885-1.002-1.465-2.197-1.74-3.587-.274-1.373-.194-2.653.237-3.839a6.42 6.42 0 0 1 2.198-2.961c1.034-.789 2.27-1.284 3.709-1.486 1.351-.19 2.636-.076 3.855.342a6.99 6.99 0 0 1 3.119 2.08c.877.967 1.46 2.18 1.75 3.64l-10.075 3.479c.437.653 1.005 1.11 1.706 1.368.718.256 1.542.32 2.472.189Zm-2.216-8.022c-1.035.145-1.812.594-2.33 1.345-.517.752-.678 1.712-.482 2.882l6.63-2.299a3.368 3.368 0 0 0-1.53-1.58c-.683-.35-1.446-.466-2.288-.348ZM72.977 24.637a14.617 14.617 0 0 1-3.53.068c-1.182-.138-2.149-.377-2.902-.718l.788-3.111c.712.31 1.54.533 2.487.668.943.118 1.845.116 2.704-.005 1.737-.244 2.521-.792 2.352-1.643-.08-.4-.373-.653-.882-.76-.508-.108-1.265-.153-2.272-.137-1.192-.01-2.188-.076-2.988-.196a4.938 4.938 0 0 1-2.212-.922c-.658-.497-1.092-1.275-1.302-2.335-.177-.886-.077-1.704.297-2.454.388-.769 1.035-1.413 1.942-1.934.924-.523 2.062-.879 3.412-1.069 1-.14 2.014-.167 3.042-.079 1.041.068 1.925.248 2.65.539l-.794 3.085a8.598 8.598 0 0 0-4.286-.469c-.878.123-1.511.337-1.902.642-.39.305-.547.649-.471 1.031.086.435.383.706.892.813.508.107 1.295.166 2.361.177 1.196.028 2.185.104 2.967.226a4.532 4.532 0 0 1 2.154.903c.658.497 1.089 1.258 1.292 2.284.173.868.064 1.679-.328 2.43-.392.752-1.059 1.39-2 1.916-.928.505-2.085.855-3.47 1.05ZM88.932 22.395c-1.491.21-2.894.094-4.207-.346a7.738 7.738 0 0 1-3.277-2.193c-.884-1-1.464-2.196-1.74-3.587-.276-1.39-.19-2.68.26-3.868.448-1.188 1.2-2.17 2.255-2.943 1.069-.793 2.349-1.294 3.84-1.504 1.492-.21 2.887-.084 4.187.376a7.534 7.534 0 0 1 3.27 2.166c.885 1.002 1.465 2.197 1.741 3.588.277 1.39.19 2.679-.26 3.867-.448 1.189-1.199 2.179-2.25 2.97-1.054.773-2.327 1.264-3.819 1.474Zm-.663-3.337c1.053-.148 1.844-.616 2.372-1.405.543-.808.697-1.803.462-2.985-.234-1.182-.763-2.072-1.585-2.671-.809-.619-1.74-.854-2.792-.706-1.053.148-1.85.626-2.393 1.434-.546.792-.702 1.778-.467 2.96.235 1.182.765 2.08 1.59 2.697.823.599 1.76.824 2.813.676ZM114.704 3.929c1.772-.25 3.279.075 4.521.972 1.257.878 2.09 2.35 2.501 4.418l1.595 8.029-4.105.577-1.471-7.403c-.221-1.112-.622-1.905-1.203-2.377-.566-.492-1.279-.677-2.139-.556-.965.135-1.666.555-2.103 1.26-.441.687-.54 1.639-.299 2.855l1.399 7.038-4.106.577-1.471-7.403c-.438-2.207-1.552-3.185-3.342-2.933-.947.133-1.64.552-2.077 1.256-.44.688-.54 1.64-.298 2.856l1.398 7.038-4.105.577-2.787-14.024 3.922-.551.321 1.616a4.85 4.85 0 0 1 1.652-1.626c.71-.42 1.521-.696 2.433-.824 1-.14 1.943-.068 2.83.219a5.157 5.157 0 0 1 2.284 1.42 5.429 5.429 0 0 1 1.848-2.001c.815-.525 1.749-.862 2.802-1.01ZM133.681 12.757c.737-.104 1.366-.3 1.886-.587.534-.307 1-.73 1.398-1.268l2.65 2.039c-1.033 1.7-2.83 2.729-5.392 3.089-1.596.224-3.069.118-4.418-.317-1.352-.453-2.471-1.18-3.355-2.181-.884-1.001-1.464-2.197-1.74-3.587-.273-1.373-.194-2.652.238-3.839a6.419 6.419 0 0 1 2.198-2.961c1.034-.788 2.27-1.284 3.708-1.486 1.351-.19 2.636-.076 3.856.343a6.986 6.986 0 0 1 3.118 2.08c.878.966 1.461 2.18 1.751 3.639l-10.075 3.48c.436.652 1.005 1.108 1.705 1.367.718.257 1.543.32 2.472.189Zm-2.216-8.022c-1.035.145-1.811.594-2.329 1.346-.518.751-.679 1.712-.483 2.88l6.631-2.298a3.366 3.366 0 0 0-1.531-1.58c-.683-.35-1.445-.466-2.288-.348Z"
        fill="#FBECF0"
      />
      <path
        d="M9.43 14.276c1.702-.239 3.25-.117 4.645.366 1.394.483 2.57 1.318 3.527 2.505.957 1.187 1.617 2.693 1.98 4.518l1.983 9.983-4.263.6-.87-4.38-8.422 1.184.87 4.38-4.21.591-1.984-9.984c-.363-1.824-.32-3.429.126-4.813.446-1.385 1.235-2.496 2.367-3.334 1.132-.838 2.55-1.377 4.251-1.616ZM15.76 24.48l-.518-2.607c-.3-1.512-.904-2.597-1.81-3.256-.91-.675-2.014-.922-3.313-.74-1.315.185-2.273.722-2.872 1.61-.585.868-.727 2.058-.427 3.57l.518 2.606 8.422-1.183ZM45.094 13.926l1.538 7.742c.41 2.068.158 3.747-.758 5.037s-2.427 2.083-4.532 2.378c-1.018.143-1.952.114-2.804-.088a4.995 4.995 0 0 1-2.248-1.238 4.253 4.253 0 0 1-1.647 1.785c-.71.422-1.591.706-2.644.854-2.123.299-3.858-.038-5.205-1.01-1.347-.971-2.226-2.491-2.637-4.56l-1.538-7.741 4.105-.577 1.476 7.429c.232 1.164.604 1.996 1.118 2.495.51.483 1.196.663 2.056.542.877-.123 1.47-.492 1.781-1.108.31-.615.352-1.496.124-2.643l-1.476-7.429 4.106-.577 1.476 7.43c.228 1.146.608 1.968 1.14 2.465.53.497 1.235.684 2.112.56.86-.12 1.438-.479 1.735-1.074.293-.613.324-1.501.092-2.666l-1.476-7.429 4.106-.577ZM58.096 23.38c.737-.104 1.365-.3 1.885-.587.534-.307 1-.73 1.399-1.268l2.65 2.039c-1.033 1.699-2.83 2.729-5.392 3.089-1.596.224-3.07.118-4.418-.317-1.353-.453-2.471-1.18-3.355-2.181-.885-1.002-1.465-2.197-1.74-3.587-.274-1.373-.194-2.653.237-3.839a6.42 6.42 0 0 1 2.198-2.961c1.034-.789 2.27-1.284 3.709-1.486 1.351-.19 2.636-.076 3.855.342a6.99 6.99 0 0 1 3.119 2.08c.877.967 1.46 2.18 1.75 3.64l-10.075 3.479c.437.653 1.005 1.11 1.706 1.368.718.256 1.542.32 2.472.189Zm-2.216-8.022c-1.035.145-1.812.594-2.33 1.345-.517.752-.678 1.712-.482 2.882l6.63-2.299a3.368 3.368 0 0 0-1.53-1.58c-.683-.35-1.446-.466-2.288-.348ZM72.977 24.637a14.617 14.617 0 0 1-3.53.068c-1.182-.138-2.149-.377-2.902-.718l.788-3.111c.712.31 1.54.533 2.487.668.943.118 1.845.116 2.704-.005 1.737-.244 2.521-.792 2.352-1.643-.08-.4-.373-.653-.882-.76-.508-.108-1.265-.153-2.272-.137-1.192-.01-2.188-.076-2.988-.196a4.938 4.938 0 0 1-2.212-.922c-.658-.497-1.092-1.275-1.302-2.335-.177-.886-.077-1.704.297-2.454.388-.769 1.035-1.413 1.942-1.934.924-.523 2.062-.879 3.412-1.069 1-.14 2.014-.167 3.042-.079 1.041.068 1.925.248 2.65.539l-.794 3.085a8.598 8.598 0 0 0-4.286-.469c-.878.123-1.511.337-1.902.642-.39.305-.547.649-.471 1.031.086.435.383.706.892.813.508.107 1.295.166 2.361.177 1.196.028 2.185.104 2.967.226a4.532 4.532 0 0 1 2.154.903c.658.497 1.089 1.258 1.292 2.284.173.868.064 1.679-.328 2.43-.392.752-1.059 1.39-2 1.916-.928.505-2.085.855-3.47 1.05ZM88.932 22.395c-1.491.21-2.894.094-4.207-.346a7.738 7.738 0 0 1-3.277-2.193c-.884-1-1.464-2.196-1.74-3.587-.276-1.39-.19-2.68.26-3.868.448-1.188 1.2-2.17 2.255-2.943 1.069-.793 2.349-1.294 3.84-1.504 1.492-.21 2.887-.084 4.187.376a7.534 7.534 0 0 1 3.27 2.166c.885 1.002 1.465 2.197 1.741 3.588.277 1.39.19 2.679-.26 3.867-.448 1.189-1.199 2.179-2.25 2.97-1.054.773-2.327 1.264-3.819 1.474Zm-.663-3.337c1.053-.148 1.844-.616 2.372-1.405.543-.808.697-1.803.462-2.985-.234-1.182-.763-2.072-1.585-2.671-.809-.619-1.74-.854-2.792-.706-1.053.148-1.85.626-2.393 1.434-.546.792-.702 1.778-.467 2.96.235 1.182.765 2.08 1.59 2.697.823.599 1.76.824 2.813.676ZM114.704 3.929c1.772-.25 3.279.075 4.521.972 1.257.878 2.09 2.35 2.501 4.418l1.595 8.029-4.105.577-1.471-7.403c-.221-1.112-.622-1.905-1.203-2.377-.566-.492-1.279-.677-2.139-.556-.965.135-1.666.555-2.103 1.26-.441.687-.54 1.639-.299 2.855l1.399 7.038-4.106.577-1.471-7.403c-.438-2.207-1.552-3.185-3.342-2.933-.947.133-1.64.552-2.077 1.256-.44.688-.54 1.64-.298 2.856l1.398 7.038-4.105.577-2.787-14.024 3.922-.551.321 1.616a4.85 4.85 0 0 1 1.652-1.626c.71-.42 1.521-.696 2.433-.824 1-.14 1.943-.068 2.83.219a5.157 5.157 0 0 1 2.284 1.42 5.429 5.429 0 0 1 1.848-2.001c.815-.525 1.749-.862 2.802-1.01ZM133.681 12.757c.737-.104 1.366-.3 1.886-.587.534-.307 1-.73 1.398-1.268l2.65 2.039c-1.033 1.7-2.83 2.729-5.392 3.089-1.596.224-3.069.118-4.418-.317-1.352-.453-2.471-1.18-3.355-2.181-.884-1.001-1.464-2.197-1.74-3.587-.273-1.373-.194-2.652.238-3.839a6.419 6.419 0 0 1 2.198-2.961c1.034-.788 2.27-1.284 3.708-1.486 1.351-.19 2.636-.076 3.856.343a6.986 6.986 0 0 1 3.118 2.08c.878.966 1.461 2.18 1.751 3.639l-10.075 3.48c.436.652 1.005 1.108 1.705 1.367.718.257 1.543.32 2.472.189Zm-2.216-8.022c-1.035.145-1.811.594-2.329 1.346-.518.751-.679 1.712-.483 2.88l6.631-2.298a3.366 3.366 0 0 0-1.531-1.58c-.683-.35-1.445-.466-2.288-.348Z"
        stroke="#0D0D0D"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        mask={`url(#${random4})`}
      />
    </g>
    <defs>
      <filter
        id={`${random3}`}
        x={0.928}
        y={0.084}
        width={142.201}
        height={38.425}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.839216 0 0 0 0 0.270588 0 0 0 0 0.407843 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1325_27320"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1325_27320"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export function HomeFirst({ goto }) {
  return (
    <BodyDiv className="homeFirst">
      <div className="homefirst_image_relative">
        <div className="horizontal_flex homefirst_flex">
          <div className="d-none d-lg-block">
            <Image
              src={images.sidetext}
              alt="logo"
              style={{ height: '38rem' }}
            />
          </div>
          <div className="homefirst_content">
            <p className="homefirst_font">
              Create{' '}
              <AwesomeSvg className="homefirst_awesomestyles d-none d-md-inline-block" />
              <AwesomeSvgMobile
                className="homefirst_awesomestyles d-sm-inline-block d-md-none"
                style={{ marginLeft: '1.2rem' }}
              />{' '}
              songs right through your phone
            </p>
            <p className="homefirst_poppin homefirst_content_side">
              Join the greatest musicians community already making music on
              WeJammin
            </p>
            <button
              className="home_button homefirst_content_sides"
              onClick={goto}
            >
              Download app
              <Image
                src={images.go}
                alt="logo"
                className="homefirst_arrowstyle"
              />
            </button>
          </div>
        </div>
        <div style={{ paddingTop: '10rem' }} className="d-none d-lg-block">
          <div className="homefirst_image_absolute d-none d-lg-block">
            <Image src={images.illustration} alt="logo" />
          </div>
        </div>
        <div className="homefirst_social_absolute d-none d-lg-block">
          <div className="homefirst_social_align">
            <p className="homefirst_social_style ">
              {' '}
              <Image
                src={images.facefirst}
                alt="logo"
                className="homefirst_logostyle"
              />
              Facebook
            </p>
            <p className="homefirst_social_style">
              <Image
                src={images.instafirst}
                alt="logo"
                className="homefirst_logostyle"
              />
              Instagram
            </p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center d-sm-block d-md-none">
          <Image src={images.illustrationmobile} alt="logo" />
        </div>
      </div>
    </BodyDiv>
  );
}
