/* You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useLayoutEffect, useState } from 'react';
import preloadImages from '../../lib/preloadImages';

// export const eventWrapper = methodToCall => () => methodToCall(true);

const usePreloadImages = (folder, data) => {
    const [loaded, setLoaded] = useState(false); // so that it renders on server
    const [errored, setErrored] = useState(false);

    useLayoutEffect(() => {
        if (typeof window === 'object' && data) {
            console.log('TCL: usePreloadImages -> data', data);
            setLoaded(false);
            setErrored(false);

            const images = [];
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].length; j++) {
                    images.push(`${folder}${data[i][j].src}`);
                }
            }

            // Add a listener to wait until the preloadImage is ready
            // const img = document.createElement('img')
            // img.src = imageToLoad
            // // On load, or on error, continue to show the component
            // img.onload = eventWrapper(setLoaded)
            // img.onerror = eventWrapper(setErrored)

            preloadImages(images)
                .then(() => {
                    // eventWrapper(setLoaded);
                    setLoaded(true);
                    // console.log('TCL: usePreloadImages -> setLoaded', setLoaded);
                    // eventWrapper(setErrored);
                })
                .catch(err => eventWrapper(setErrored));
        }
    }, [data]);
    return [errored, loaded];
};

export default usePreloadImages;
